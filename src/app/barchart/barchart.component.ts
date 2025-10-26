import { Component, OnInit } from '@angular/core';
import {} from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
  standalone: true,
  imports: [NgChartsModule],
})
export class BarchartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public barChartData: ChartConfiguration['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July',
      'Aug',
      'Sep',
      'Oct',
    ],
    datasets: [
      {
        label: 'Total Donations (₵)',
        data: [1200, 2300, 1800, 2900, 3400, 2600, 1000, 2000, 3000, 4000],
        backgroundColor: '#4B5563',
        borderRadius: 25,
        hoverBackgroundColor: '#009688',
      },
    ],
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#111827', // dark gray text
        },
      },
      title: {
        // display: true,
        // text: 'Payments',
        // font: { size: 16},
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.parsed.y;
            return value ? `₵${value.toLocaleString()}` : '';
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#374151' },
      },
      y: {
        grid: { display: false },
        beginAtZero: true,
        ticks: {
          color: '#374151',
          callback: (value) => '₵' + value,
        },
      },
    },
  };


  public barChartType: ChartType = 'bar';
}
