import { Component, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss'],
  standalone: true,
  imports: [IonIcon]
})
export class OverviewCardComponent implements OnInit {
  // The props it will consume
  title = input<string>('My Announcements');
  subTitle = input<string>('Total Announcements');
  icon = input<string>('megaphone');
  value = input<number | string>(0);
  link = input<string>('announcements');

  // injections 
  router = inject(Router); 

  constructor() {}

  ngOnInit() { }
  

  goToPage() {
    this.router.navigate([`/${this.link()}`]);
  }
}
