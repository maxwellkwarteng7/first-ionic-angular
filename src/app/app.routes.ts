import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailPage } from './recipes/recipe-detail/recipe-detail.page';
import { DashboardWrapperComponent } from './dashboard-wrapper/dashboard-wrapper.component';
import { OverviewComponentComponent } from './overview-component/overview-component.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch : 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'dashboard',
    component: DashboardWrapperComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponentComponent },
    ]
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
