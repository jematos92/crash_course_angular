import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { AboutComponent } from "./components/pages/about/about.component";

const routes: Routes = [
  {
    path: "",
    component: ShoppingListComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
