import { Component, OnInit } from "@angular/core";
import { ShoppingItem } from "src/app/models/shoppingItem";
import { ShoppingListService } from "src/app/services/shopping-list-service.service";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  shoppingItems: ShoppingItem[];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingListService.getShoppingList().subscribe(items => {
      this.shoppingItems = items;
    });
  }

  onDeleteItem(itemToDelete: ShoppingItem) {
    this.shoppingListService
      .deleteShoppingListItem(itemToDelete)
      .subscribe(items => {
        this.shoppingItems = this.shoppingItems.filter(
          item => item.id !== itemToDelete.id
        );
      });
  }
}
