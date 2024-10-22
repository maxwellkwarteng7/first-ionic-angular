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
    IonLabel
  ],
})
export class RecipesComponent implements OnInit {
  recipe: Recipe[] = [];

  isLoggedIn: boolean = false;

  constructor(private recipeService: RecipeServiceService) {}

  ngOnInit(): void {
    this.recipe = this.recipeService.getAllRecipes();
    console.log("recipes", this.recipe);
  }
}
