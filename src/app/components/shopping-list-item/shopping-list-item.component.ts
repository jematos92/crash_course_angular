import { Component, OnInit, Input } from "@angular/core";
import { ShoppingItem } from "src/app/models/shoppingItem";

@Component({
  selector: "app-shopping-list-item",
  templateUrl: "./shopping-list-item.component.html",
  styleUrls: ["./shopping-list-item.component.css"]
})
export class ShoppingListItemComponent implements OnInit {
  @Input() item: ShoppingItem;
  constructor() {}

  ngOnInit() {}

  setClasses() {
    let classes = {
      item: true, // Always add the class todo
      "is-complete": this.item.completed
    };
    return classes;
  }

  onDelete(item: ShoppingItem) {}

  onChange(item: ShoppingItem) {
    item.completed = !item.completed;
  }
}
