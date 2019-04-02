import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ShoppingItem } from "src/app/models/shoppingItem";
import { ShoppingListService } from "src/app/services/shopping-list-service.service";

@Component({
  selector: "app-shopping-list-item",
  templateUrl: "./shopping-list-item.component.html",
  styleUrls: ["./shopping-list-item.component.css"]
})
export class ShoppingListItemComponent implements OnInit {
  @Input() item: ShoppingItem;
  @Output() deleteItem: EventEmitter<ShoppingItem> = new EventEmitter();
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  setClasses() {
    let classes = {
      item: true, // Always add the class todo
      "is-complete": this.item.completed
    };
    return classes;
  }

  onDelete(item: ShoppingItem) {
    this.deleteItem.emit(item);
  }

  onChange(item: ShoppingItem) {
    item.completed = !item.completed;
    this.shoppingListService.updateShoppingListItem(item);
  }
}
