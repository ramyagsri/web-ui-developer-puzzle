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

  it('Then: I should see mark book as finished', async () => {
    // make reading list empty
    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();
    await element.all(by.css('[data-testing="remove-list-item"]')).each((button) => {
      button.click();
    });
    await $('[data-testing="close-reading-list"]').click();

    // search for books
    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('react');
    await form.submit();

    // add book to reading list
    const addToReadingListBtn = element.all(by.css('[data-testing="add-to-reading-list"]')).first();
    await addToReadingListBtn.click();

    // mark as read
    await readingListToggle.click();
    const markAsFinishedButton = element.all(by.css('.mark-finish-text')).first();
    await browser.wait(ExpectedConditions.visibilityOf(markAsFinishedButton));
    await markAsFinishedButton.click();

    // finished text should be shown
    const finishedText = element(by.css('.finished-text'));
    expect(ExpectedConditions.visibilityOf(finishedText));
  })
});
