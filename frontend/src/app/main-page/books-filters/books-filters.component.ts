import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-books-filters',
  templateUrl: './books-filters.component.html',
  styleUrls: ['./books-filters.component.scss']
})
export class BooksFiltersComponent {
  @Output() showCategory= new EventEmitter<string>();
categories= ["Biography",
  "Fiction",
  "History",
  "Mystery",
  "Non-fiction",
  "Philosophy",
  "Science fiction"]

  onShowCategory(category: string): void
  {
    this.showCategory.emit(category);
  }
}
