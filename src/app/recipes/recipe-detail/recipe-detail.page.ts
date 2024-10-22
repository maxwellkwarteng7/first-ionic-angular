import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonImg,
  IonLabel,
  IonList,
  IonItem,
  IonBackButton,
} from "@ionic/angular/standalone";
import { ActivatedRoute } from "@angular/router";
import { RecipeServiceService } from "../recipe-service.service";
import { Recipe } from "src/app/models/interface";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"],
  standalone: true,
  imports: [
    IonBackButton,
    IonItem,
    IonList,
    IonImg,
    IonAvatar,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonLabel,
  ],
})
export class RecipeDetailPage implements OnInit {
  //single  recipe variable to hold the recipe
  singleRecipe: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private recipeService: RecipeServiceService
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((param) => {
      // get the recipeId
      let recipeId = param.get("recipeId");
      if (recipeId) {
        this.singleRecipe = this.recipeService.getSingleRecipe(recipeId);
        console.log(this.singleRecipe);
      }
      // get the recipe from the service .
    });
  }
}
