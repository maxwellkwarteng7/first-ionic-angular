import { Component, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
  standalone: true, 
  imports : [NgChartsModule]
})
export class PiechartComponent  implements OnInit {

  constructor() { }

  ngOnInit() { }
  
   public doughnutChartLabels: string[] = [
    'Anonymous Donations',
    'Unanonymous Donations',
  ];


  public doughnutChartData: ChartConfiguration['data'] = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [4500, 3200],
        backgroundColor: ['#4f46e5', '#06b6d4'],
        hoverBackgroundColor: ['#6366f1', '#22d3ee'],
        borderWidth: 0,
      },
    ],
  };

   public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#111827', font: { weight: 'bold' } },
      },
      title: {
        display: true,
        text: 'Donations by Category (₵)',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.parsed;
            return `₵${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  public doughnutChartType: ChartType = 'doughnut';

}
