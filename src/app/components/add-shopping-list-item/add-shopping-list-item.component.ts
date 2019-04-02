import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ShoppingItem } from "src/app/models/shoppingItem";

@Component({
  selector: "app-add-shopping-list-item",
  templateUrl: "./add-shopping-list-item.component.html",
  styleUrls: ["./add-shopping-list-item.component.css"]
})
export class AddShoppingListItemComponent implements OnInit {
  @Output() addItem: EventEmitter<ShoppingItem> = new EventEmitter();

  title: string;
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const item: ShoppingItem = {
      completed: false,
      id: "123",
      title: this.title
    };
    this.addItem.emit(item);
  }
}
