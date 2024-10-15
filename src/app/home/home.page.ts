import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/angular/standalone";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: true,
  imports: [
    IonInput,
    IonLabel,
    IonItem,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ReactiveFormsModule,
  ],
})
export class HomePage {
  text: string = "Hello this is new ";
  constructor() {}

  // making my form
  testForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.min(5)]),
    age: new FormControl(0, [Validators.required, Validators.min(20)]),
  });

  changeText() {
    this.text = "Changed !!";
  }
  handleSubmit() {
    // take the values
    let testValues = this.testForm.value;
    console.log(testValues);
  }
}
