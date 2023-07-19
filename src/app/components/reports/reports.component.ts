import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { QuickshopService } from 'src/app/services/quickshop.service';
import * as _ from 'lodash'

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
  dataSource: string = 'orders'
  xAxisLabel: string = 'YEAR'
  yAxisLabel: string = 'COUNT'
  chartType: string = 'bar'
  documentStyle = getComputedStyle(document.documentElement)
  textColor = this.documentStyle.getPropertyValue('--text-color')
  textColorSecondary = this.documentStyle.getPropertyValue('--text-color-secondary')
  surfaceBorder = this.documentStyle.getPropertyValue('--surface-border')
  xAxisValues: any[] = []//['Q1', 'Q2', 'Q3', 'Q4']
  yAxisValues: any[] = []//[540, 325, 702, 620]
  //labelAttrMap: Map<string,string> = new Map()
  reportSettings: any = {}
  menuConfig: any[] = [
    {dropIdentifier: 'charts',settingsData:{}},
    {dropIdentifier: 'loadOS',settingsData:{}}
  ]

  ngOnInit(): void {
    this.populateReportOptions()
    if(this.dataSource == 'orders')
      this.getOrderData(this.xAxisLabel,this.yAxisLabel)
  }
  getOrderData(xAxisAttr:string, yAxisAttr:string){
    this.qsService.loadOrderReport(xAxisAttr,yAxisAttr).subscribe({next: (response) => {
        let resp = Object.assign(response);
        if(resp){
          if(resp.length){
            resp.forEach((item:any) => {
              this.reportData.push(item)
              if(_.findIndex(this.xAxisValues,(obj) => { return obj == item[xAxisAttr] }, 0) == -1) 
                this.xAxisValues.push(item[xAxisAttr])
              this.yAxisValues.push(item[yAxisAttr])
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
  getProductData(xAxisAttr:string, yAxisAttr:string){
    this.qsService.loadProductReport(xAxisAttr,yAxisAttr).subscribe({next: (response) => {
        let resp = Object.assign(response);
        if(resp){
          if(resp.length){
            resp.forEach((item:any) => {
              this.reportData.push({ name: item[xAxisAttr], value: item[yAxisAttr] })
              if(_.findIndex(this.xAxisValues,(obj) => { return obj == item[xAxisAttr] }, 0) == -1) 
                this.xAxisValues.push(item[xAxisAttr])
              this.yAxisValues.push(item[yAxisAttr])
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
  getCustomerData(xAxisAttr:string, yAxisAttr:string){
    this.qsService.loadCustomerReport(xAxisAttr,yAxisAttr).subscribe({next: (response) => {
        let resp = Object.assign(response);
        if(resp){
          if(resp.length){
            resp.forEach((item:any) => {
              this.reportData.push({ name: item[xAxisAttr], value: item[yAxisAttr] })
              if(_.findIndex(this.xAxisValues,(obj) => { return obj == item[xAxisAttr] }, 0) == -1) 
                this.xAxisValues.push(item[xAxisAttr])
              this.yAxisValues.push(item[yAxisAttr])
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
    this.rOptions = {
      responsive: true,
      plugins: {
          legend: {
              labels: {
                  color: this.textColor
              }
          },
          title: {
            display: true,
            text: this.reportSettings.chartTitle
        }
      },
      scales: {
          y: {
              beginAtZero: true,
              ticks: {
                  color: this.textColorSecondary,
              },
              grid: {
                  color: this.surfaceBorder,
                  drawBorder: false
              },
              title: {
                display: true,
                text: this.reportSettings.yAxisTitle
              }
          },
          x: {
              ticks: {
                  color: this.textColorSecondary
              },
              grid: {
                  color: this.surfaceBorder,
                  drawBorder: false
              },
              title: {
                display: true,
                text: this.reportSettings.xAxisTitle
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
              label: this.reportSettings.reportTitle ? this.reportSettings.reportTitle : 'Years',
              data: this.yAxisValues,
              //backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
              backgroundColor: ['#ffa600','#ff6361','#bc5090','#58508d','#003f5c'],
              borderColor: ['#ffa600','#ff6361','#bc5090','#58508d','#003f5c'],
              borderWidth: 1
          }
      ]
    }
  }
  refreshReport(){
    this.rData.datasets = [];
    this.xAxisValues = [];
    this.yAxisValues = [];
    this.reportData = [];
    this.chartType = this.reportSettings.chartType
    this.populateReportOptions()
    if(this.reportSettings.dataSource == 'orders')
      this.getOrderData(this.reportSettings.xAxisLabel,this.reportSettings.yAxisLabel)
    else if(this.reportSettings.dataSource == 'products')
      this.getProductData(this.reportSettings.xAxisLabel,this.reportSettings.yAxisLabel)
    else if(this.reportSettings.dataSource == 'customers')
      this.getCustomerData(this.reportSettings.xAxisLabel,this.reportSettings.yAxisLabel)
  }
  captureSettings(data:any){
    if(data.action == 'load'){
      let menuIndex = _.findIndex(this.menuConfig, (menu) => {
        return menu.dropIdentifier == data.menu;
      }, 0);
      if(menuIndex != -1){
        this.menuConfig[menuIndex].settingsData = data.settings
        this.reportSettings = Object.assign({},data.settings)
        this.refreshReport()
      }
    }
  }
}
