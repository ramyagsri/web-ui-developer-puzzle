Code smells/problems:
1) File: book-search.component.ts
In book search component store.select() subscription is missing unsubscribe after use

2) File: reading-list.actions.ts
Both failedAddToReadingList and failedRemoveFromReadingList actions should be defined with parameters of type { error: any }
as these are pointing to failed api events 

Code improvisation:
1) File: book-search.component.ts
In book search component instead of getting all books value from subscribe and storing it in another variable 
you can assign value to observable and use it in template using async pipe

2) File: reading-list.reducer.ts
Reducer functions for actions failedAddToReadingList, confirmedAddToReadingList, failedRemoveFromReadingList, confirmedRemoveFromReadingList
can be added

Accessibility issues:
- Detected in automated scan:
1) Added accessible name by adding attribute aria-label="Search" to search button
2) Adjusted colors of Reading List button to have sufficient contrast ratio

- Detected in manual scan:
1)Content with images must be labeled
Added alt attribute for images

2)Form elements must be labeled
Added label for book search input field and added visuallyHidden styles to
hide label content from the visual client, but keep it readable for screen readers

3) Added tabindex for buttons that can be focused ex: search button



