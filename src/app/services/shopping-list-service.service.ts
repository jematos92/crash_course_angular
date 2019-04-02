import { Injectable } from "@angular/core";
import { ShoppingItem } from "../models/shoppingItem";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  url: string = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http: HttpClient) {}

  getShoppingList(): Observable<ShoppingItem[]> {
    return this.http.get<ShoppingItem[]>(this.url + "?_limit=5");
  }
}
