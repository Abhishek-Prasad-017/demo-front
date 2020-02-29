import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {Software} from '../software';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() data:Software;
  @Input() label:string[];
  public chartType: string = 'bar';
  

  constructor() { }

  ngOnInit(): void {
    
  }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  public options: any = {
    barThickness: -1,
    responsive: true
  }
  barChartLabels: Label[] = ["Chiranthan", "Manaswini", "Sandya" , "Yashika" , "Natrajan"]
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barThickness: 1;
  barChartData: ChartDataSets[] = [
    { data: [10, 7,9 , 3, 17], label: 'Softwares' }
  ];
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  

}
