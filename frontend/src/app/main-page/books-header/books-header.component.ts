import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-books-header',
  templateUrl: './books-header.component.html',
  styleUrls: ['./books-header.component.scss']
})
export class BooksHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
 sort = 'desc';
 itemsShowCount=12;
ngOnInit(): void {
  

}

onSortUpdated(newSort : string): void
{
  this.sort=newSort;
  this.sortChange.emit(newSort)
}
onItemsUpdated(count : number): void
{
  this.itemsShowCount=count;
  this.itemCountChange.emit(count);
}

onColumnsUpdated(colsNum:number):void {
  this.columnsCountChange.emit(colsNum);
}
}
