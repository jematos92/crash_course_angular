import { Injectable } from "@angular/core";
import { ShoppingItem } from "../models/shoppingItem";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  url: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) {}

  getShoppingList(): Observable<ShoppingItem[]> {
    return this.http.get<ShoppingItem[]>(this.url + "?_limit=5");
  }

  updateShoppingListItem(item: ShoppingItem): Observable<any> {
    console.log("test");
    return this.http.put(`${this.url}/${item.id}`, item, httpOptions);
  }

  deleteShoppingListItem(item: ShoppingItem): Observable<any> {
    return this.http.delete<ShoppingItem>(
      `${this.url}/${item.id}`,
      httpOptions
    );
  }
  addShoppingListItem(item: ShoppingItem): Observable<any> {
    return this.http.put<ShoppingItem>(
      `${this.url}/${item.id}`,
      item,
      httpOptions
    );
  }
}
