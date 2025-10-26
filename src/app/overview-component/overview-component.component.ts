import { Component, OnInit } from '@angular/core';
import { OverviewCardComponent } from '../overview-card/overview-card.component';
import { BarchartComponent } from "../barchart/barchart.component";
import { PiechartComponent } from "../piechart/piechart.component";

@Component({
  standalone : true , 
  selector: 'app-overview-component',
  templateUrl: './overview-component.component.html',
  styleUrls: ['./overview-component.component.scss'],
  imports: [OverviewCardComponent, BarchartComponent, PiechartComponent]
})
export class OverviewComponentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
