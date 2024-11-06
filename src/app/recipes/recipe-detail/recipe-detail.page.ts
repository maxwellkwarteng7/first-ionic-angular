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
  IonButton,
} from "@ionic/angular/standalone";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeServiceService } from "../recipe-service.service";
import { Recipe } from "src/app/models/interface";
import { AlertController} from '@ionic/angular'

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"],
  standalone: true,
  imports: [
    IonButton,
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
    private recipeService: RecipeServiceService,
    private Alert: AlertController, 
    private router : Router
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

  // delete the recipe 

  async presentAlert(id : string) {
    const alert = this.Alert.create({
      header: 'Are you sure you want to delete ?',
      message: 'You cannot revert this ',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.recipeService.deleteRecipe(id); 
            this.router.navigateByUrl('recipe');  
          }
        }
      ]
    }); 
    (await alert).present();
  }
}
