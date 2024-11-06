import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  constructor(private alert: AlertController) { }
  
  // the function to run the alert 
}
