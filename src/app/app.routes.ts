import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoffeesComponent } from './components/coffees/coffees.component';
import { ProductComponent } from './components/product/product.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { LoginComponent } from './components/login/login.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coffees', component: CoffeesComponent },
  { path: 'product', component: ProductComponent },
  { path: 'article', component: ArticlesComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'login', component: LoginComponent },
];
