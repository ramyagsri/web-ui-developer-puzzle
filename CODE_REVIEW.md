Code smells/problems:
1) File: book-search.component.ts
In book search component store.select() subscription is not being unsubscribed which may lead to memory leak when component is destroyed. 
Better way of handling is by referring books observable property and use async pipe in template to resolve observable.
This way async pipe will take care of unsubscribing from observable automatically

2) File: book-search.component.html, reading-list.component.html
Proper naming convention of variables - 
i) While iterating books collection, item can be named as book instead of b
ii) While iterating reading list collection, item can be named as readingItem instead of b 
This will help developers to have better understanding of what the iterating item is when going through the code

3) File: reading-list.component.html, File: book-search.component.html
Section tag semantic element can be used instead of div for grouping.
Semantic elements help structure the code we create, making it more readable and easier to maintain

4) File: storage.service.ts
Catch block of JSON.parse can include error handling when any exception is thrown. Like displaying suitable error message to user

5) File: book-search.component.html
Can use angular date pipe to change the format
```
  <strong>Published:</strong> {{ book.publishedDate | date:'MM/dd/yyyy' }}
```

Code improvements:
1) Application can be made responsive for smaller screens
2) Can add home button or clear search button to bring application to original state or to clear search results


Accessibility issues:
- Detected in automated scan:
1)File: app.component.html
Added accessible name by adding attribute aria-label="Close Reading List" to close button

2)File: book-search.component.html
Added accessible name by adding attribute aria-label="Search books" to search button

3)File: app.component.scss
Modified background color of header from $pink-accent to $pink-dark to have sufficient contrast ratio between background and foreground colors

- Detected in manual scan:
1)File: reading-list.component.html
Content with images must be labeled
Added empty alt attribute for decorative image (as the text shown in image is already presented to its right)

2)File: book-search.component.html
Content with images must be labeled
Added empty alt attribute for decorative image (as the text shown in image is already presented to its right)
