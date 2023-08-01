import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { DonasService } from '../../donas.service';

@Component({
  selector: 'app-donas',
  templateUrl: './donas.component.html',
  styleUrls: ['./donas.component.css']
})
export class DonasComponent {

  public doughnutChartLabels: string[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [

      // { data: [350, 450, 100] },
      
      
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  constructor(private graficaService: DonasService){}
  ngOnInit():void{



    // const labels= Object.keys(data);
    // const values= Object.values(data);
    
    // this.doughnutChartLabels=labels;
    this.graficaService.getMateriaPrimaDona()
      .subscribe( ({ labels,values})=>{

        this.doughnutChartLabels=labels;
        
    });

    
    
  }

}
