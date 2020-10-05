import { $, $$, browser, ExpectedConditions, element, by } from 'protractor';

describe('When: I use the reading list feature', () => {
  beforeEach(async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );
  });

  it('Then: I should see my reading list', async () => {
    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });

  it('Then: undo removing book should add it list', async () => {
    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();
    await element.all(by.css('[data-testing="remove-list-item"]')).each((button) => {
      button.click();
    });
    await $('[data-testing="close-reading-list"]').click();

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('ngrx');
    await form.submit();

    const addToReadingListBtn = element.all(by.css('[data-testing="add-to-reading-list"]')).first();
    await addToReadingListBtn.click();

    await readingListToggle.click();
    const readingListCount = $$('[data-testing="reading-list-item"]').count();
    await element(by.css('[data-testing="remove-list-item"]')).click();

    await browser.executeScript("return await document.querySelector('.mat-simple-snackbar-action')").
    then((undoButton: HTMLElement)=>{
      undoButton.click();
    });
    const newCount = $$('[data-testing="reading-list-item"]').count();
    expect(newCount).toEqual(readingListCount);
  });
});
