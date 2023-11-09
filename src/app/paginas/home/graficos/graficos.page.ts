import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.page.html',
  styleUrls: ['./graficos.page.scss'],
})
export class GraficosPage implements OnInit {



  @ViewChild("meuCanvas", { static: true }) elemento!: ElementRef;

  @ViewChild("meuCanvas2", { static: true }) elemento2!: ElementRef;

  @ViewChild("meuCanvas3", { static: true }) elemento3!: ElementRef;

  
  ngOnInit(){
    new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Janeiro","Fevereiro","Março","Abril"],
        datasets: [
          {
            data: [20,72,60,15],
            borderColor: '#00AEFF',
            backgroundColor: ['#00AEFF', '#d93644','#d97d36','#36d946'],

          },
          
        ]

        
      },
    
    });


    new Chart(this.elemento2.nativeElement, {
      type: 'pie',
      data: {
        labels: ["Janeiro","Fevereiro","Março","Abril"],
        datasets: [
          {
            data: [20,72,60,15],
            borderColor: ['#00AEFF', '#d93644','#d93644','#36d946'],
            backgroundColor: ['#00AEFF', '#d93644','#d97d36','#36d946'],
            

          },
          
        ]

        
      },
    
    });


    new Chart(this.elemento3.nativeElement, {
      type: 'bar',
     
      data: {
        
        labels: ["Janeiro","Fevereiro","Março","Abril"],
        datasets:
         [
          {
            data: [20,72,60,15],
            borderColor: '#00AEFF',
            backgroundColor: ['#00AEFF', '#d93644','#d97d36','#36d946'],

          },
          
        ]

        
      },
      options: {
        indexAxis: 'y',
      }
    });
  }
}
