Code smells/problems:
1) File: book-search.component.ts
In book search component store.select() subscription is missing unsubscribe after use 

Code improvisation:
1)File: book-search.component.ts
In book search component instead of getting all books value from subscribe and storing it in another variable 
you can assign value to observable and use it in template using async pipe

2)File: book-search.component.html, reading-list.component.html
Proper naming convention - 
While iterating books collection item can be named as book instead of b to have better understanding of iterating item
While iterating reading list collection item can be named as readingItem instead of b to have better understanding of iterating item

3)File: reading-list.component.html, File: book-search.component.html
Section tag semantic element can be used instead of div for grouping 

Accessibility issues:
- Detected in automated scan:
1)File: app.component.html
Added accessible name by adding attribute aria-label="Close Reading List" to close button

1)File: book-search.component.html
Added accessible name by adding attribute aria-label="Search books" to search button

2)File: app.component.scss
Adjusted colors of Reading List button to have sufficient contrast ratio
Modified background color of header from $pink-accent to $pink-dark such that contrast ratio is maintained

- Detected in manual scan:
1)File: reading-list.component.html
Content with images must be labeled
Added alt attribute alt="Cover photo of book from reading list" for reading list item cover image 

2)File: book-search.component.html
Content with images must be labeled
Added alt attribute alt="Cover photo of book from search list" for search list item cover image 

3)File: book-search.component.html
Form elements must be labeled
Added label 'search' for book search input field and added visuallyHidden styles to hide label content from the visual client, but keep it readable for screen readers
