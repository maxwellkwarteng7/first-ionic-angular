import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailPage } from './recipes/recipe-detail/recipe-detail.page';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch : 'full'
  },
  {
    path: 'recipe', 
    children: [
      {
        path: '', 
        component : RecipesComponent , 
      }, 
      {
        path: ':recipeId', 
        component : RecipeDetailPage
      }
    ]
  },

];
