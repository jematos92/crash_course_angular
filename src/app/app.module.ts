import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { ShoppingListItemComponent } from "./components/shopping-list-item/shopping-list-item.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { AddShoppingListItemComponent } from "./components/add-shopping-list-item/add-shopping-list-item.component";
import { AboutComponent } from './components/pages/about/about.component';

// Root app module.
@NgModule({
  // Here is where the components go. add all components here,
  // when using cli they get added here automatically
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    HeaderComponent,
    AddShoppingListItemComponent,
    AboutComponent
  ],
  // Modules will get here, Browser, Routing, Http client.
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  // this is where the services go.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
