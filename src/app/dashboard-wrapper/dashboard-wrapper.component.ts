import { Component, OnInit, signal } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';


import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { IonIcon } from "@ionic/angular/standalone";


@Component({
  selector: 'app-dashboard-wrapper',
  standalone : true , 
  templateUrl: './dashboard-wrapper.component.html',
  styleUrls: ['./dashboard-wrapper.component.scss'],
  imports: [RouterOutlet, NgClass, IonIcon, SideBarComponent]
})
export class DashboardWrapperComponent implements OnInit {
  sideBarOpened = signal<boolean>(false); 

  constructor() { }

  ngOnInit() { }
  
  toggleSideBar() {
    this.sideBarOpened.update(prev => !prev); 
  }

  closeSideBar() {
    this.sideBarOpened.set(false);
  }

  openSideBar() {
    this.sideBarOpened.set(true);
  }

}
