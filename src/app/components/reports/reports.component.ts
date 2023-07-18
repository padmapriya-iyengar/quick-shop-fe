import { Component, OnInit } from '@angular/core';
import { QuickshopService } from 'src/app/services/quickshop.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit{

  constructor(private qsService: QuickshopService){}
  rData: any = {}
  rOptions: any = {}
  reportData: any[] = [];
  showSpinner: boolean = false
  dataSource: string = 'Order'
  xAxisLabel: string = 'OrderId'
  yAxisLabel: string = 'ProductFk'
  chartType: string = 'bar'
  documentStyle = getComputedStyle(document.documentElement)
  textColor = this.documentStyle.getPropertyValue('--text-color')
  textColorSecondary = this.documentStyle.getPropertyValue('--text-color-secondary')
  surfaceBorder = this.documentStyle.getPropertyValue('--surface-border')
  xAxisValues: any[] = ['Q1', 'Q2', 'Q3', 'Q4']
  yAxisValues: any[] = [540, 325, 702, 620]
  labelAttrMap: Map<string,string> = new Map()

  ngOnInit(): void {
    this.populateReportOptions()
    this.getOrderData(this.xAxisLabel,this.yAxisLabel)
  }
  getOrderData(xAxisAttr:string, yAxisAttr:string){
    this.qsService.getActiveOrders().subscribe({next: (response) => {
        let resp = Object.assign(response);
        if(resp){
          if(resp.length){
            resp.forEach((item:any) => {
              this.reportData.push({ name: item[xAxisAttr], value: item[yAxisAttr] })
              //this.xAxisValues.push(item[xAxisAttr])
              //this.yAxisValues.push(item[yAxisAttr])
            })
          }
          this.showSpinner = false;
          this.populateReport()
        }
      },
      error: (error) => {
        console.log('Request failed with error');
        this.showSpinner = false;
      }
    })
  }
  populateReportOptions(){
    this.labelAttrMap.set('ProductFk','Products')
    this.rOptions = {
      plugins: {
          legend: {
              labels: {
                  color: this.textColor
              }
          }
      },
      scales: {
          y: {
              beginAtZero: true,
              ticks: {
                  color: this.textColorSecondary
              },
              grid: {
                  color: this.surfaceBorder,
                  drawBorder: false
              }
          },
          x: {
              ticks: {
                  color: this.textColorSecondary
              },
              grid: {
                  color: this.surfaceBorder,
                  drawBorder: false
              }
          }
      }
  };
  }
  populateReport(){
    this.rData = {
      labels: this.xAxisValues,
      datasets: [
          {
              label: this.labelAttrMap.get(this.yAxisLabel),
              data: this.yAxisValues,
              backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
              borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
              borderWidth: 1
          }
      ]
    }
  }
  refreshReport(){
    this.rData.datasets[0].data = Object.assign({},this.yAxisValues)
  }
}
