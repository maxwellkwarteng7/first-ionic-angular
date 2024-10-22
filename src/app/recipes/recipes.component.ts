import { Component, OnInit } from "@angular/core";
import { RecipeServiceService } from "./recipe-service.service";
import { Recipe } from "../models/interface";
import { CommonModule } from "@angular/common";
import {
  IonHeader,
  IonButton,
  IonInput,
  IonLabel,
  IonItem,
  IonList,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonContent,
  IonImg,
} from "@ionic/angular/standalone";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipes",
  standalone: true,
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"],
  imports: [
    CommonModule,
    IonHeader,
    IonButton,
    IonContent,
    IonList,
    IonItem,
    IonToolbar,
    IonTitle,
    IonImg,
    IonAvatar,
    IonLabel, 
    CommonModule
  ],
})
export class RecipesComponent implements OnInit {
  recipe: Recipe[] = [];

  isLoggedIn: boolean = false;

  constructor(private recipeService: RecipeServiceService , private router : Router) {}

  ngOnInit(): void {
    this.recipe = this.recipeService.getAllRecipes();
    this.getPaginatedItems;
  }

  //navigate to a single recipe page 
  singleRecipe(id: string) {
    this.router.navigateByUrl(`recipe/${id}`); 
  }

  // doing pagination in this 
  currentPage: number = 1; 
  itemsPerPage: number = 5; 
  totalItems: number = this.recipe.length; 

  // the function to segment the data 
  get getPaginatedItems() {
    let start = (this.currentPage - 1) * this.itemsPerPage; 
    let end = this.currentPage + this.itemsPerPage; 
    // segment the data 
    let paginateditems = this.recipe.slice(start, end); 
    console.log(paginateditems);
    return paginateditems; 
  }
  get totalPages() {
    let totalPages = Math.round(this.recipe.length / this.itemsPerPage); 
    return totalPages; 
  }

  
  
  
}
