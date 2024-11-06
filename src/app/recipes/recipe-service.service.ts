import { Injectable } from '@angular/core';
import { Recipe } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  recipes: Recipe[] = [
    {
      id: '12', 
      title: 'Groundnut Soup', 
      imageUrl: 'https://plus.unsplash.com/premium_photo-1699541755563-1691ecaa7d99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c291cHxlbnwwfHwwfHx8MA%3D%3D', 
      ingredients : ['tomato' , 'ginger' , 'groundnut']
    } , 
    {
      id: '23', 
      title: 'Palmnut Soup', 
      imageUrl: 'https://plus.unsplash.com/premium_photo-1699541755563-1691ecaa7d99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c291cHxlbnwwfHwwfHx8MA%3D%3D', 
      ingredients : ['tomato' , 'ginger' , 'palm fruit']
    } , 
    {
      id: '523', 
      title: 'Palmnut Soup', 
      imageUrl: 'https://plus.unsplash.com/premium_photo-1699541755563-1691ecaa7d99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c291cHxlbnwwfHwwfHx8MA%3D%3D', 
      ingredients : ['tomato' , 'ginger' , 'palm fruit']
    } , 
  ]

  constructor() { }

  // generating methods to call them

  getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getSingleRecipe(id: string)  {
    return { ...this.recipes.find((recipe) => recipe.id == id) }
     
  }

  deleteRecipe(id: string) : Recipe[] {
   return  [...this.recipes.filter((recipe) => recipe.id !== id)];
  }

}
