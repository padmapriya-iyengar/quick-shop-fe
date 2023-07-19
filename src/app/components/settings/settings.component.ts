import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{
  @Input() menuItem:string='';
  @Input() defaultInfo: any = {};
  @Output() onSettingsEmit = new EventEmitter<any>();
  settingsData: any = {}
  chartTypes: any[] = [];
  xAxisValues: any[] = [];
  yAxisValues: any[] = [];
  dataSources: any[] = [];
  selectedChartType:any;
  selectedDataSource:any;
  selectedXAxisAttr:any;
  selectedYAxisAttr:any;
  chartTitle:string='';
  xAxisTitle: string = ''
  yAxisTitle:string = ''


  @ViewChild('settingsForm') settingsForm!: NgForm;

  constructor(private util: UtilitiesService){}

  ngOnInit(): void {
      if(this.menuItem == 'charts'){
        this.loadDataSources()
        this.loadChartTypes()
      }
      this.loadDefaultValues(this.menuItem)
  }
  loadDefaultValues(menuItem: any){
    this.yAxisValues.push({name:'Count',value:'COUNT'})
    this.selectedYAxisAttr = this.yAxisValues[0]
    if(menuItem == 'charts'){
      this.selectedChartType = this.chartTypes[0];
      this.selectedDataSource = this.dataSources[0];
      this.loadXAxisValues();
      this.selectedXAxisAttr = this.xAxisValues[0];
    }
  }
  loadDataSources(){
    this.dataSources = []
    this.dataSources.push({name:'Orders',value:'orders'})
    this.dataSources.push({name:'Products',value:'products'})
    this.dataSources.push({name:'Customers',value:'customers'})
  }
  loadChartTypes(){
    this.chartTypes = []
    this.chartTypes.push({name:'Bar',value:'bar'})
    this.chartTypes.push({name:'Pie',value:'pie'})
    this.chartTypes.push({name:'Doughnut',value:'doughnut'})
  }
  loadXAxisValues(){
    this.xAxisValues = []
    if(this.selectedDataSource.value == 'orders'){
      this.xAxisValues.push({name:'Years',value:'YEAR'})
      this.xAxisValues.push({name:'Months in current year',value:'CURRENT_YEAR_MONTH'})
      this.xAxisValues.push({name:'Payment Mode',value:'PAYMODE'})
      this.xAxisValues.push({name:'Products',value:'PRODUCT'})
      this.xAxisValues.push({name:'Customers',value:'CUSTOMER'})
      this.xAxisValues.push({name:'Status',value:'STATUS'})
    } else if(this.selectedDataSource.value == 'products'){
      this.xAxisValues.push({name:'Years',value:'YEAR'})
      this.xAxisValues.push({name:'Months in current year',value:'CURRENT_YEAR_MONTH'})
      this.xAxisValues.push({name:'Status',value:'STATUS'})
    } else if(this.selectedDataSource.value == 'customers'){
      this.xAxisValues.push({name:'Years',value:'YEAR'})
      this.xAxisValues.push({name:'Months in current year',value:'CURRENT_YEAR_MONTH'})
      this.xAxisValues.push({name:'Status',value:'STATUS'})
    }
  }
  emitData(){
    if(!this.util.isEmpty(this.selectedChartType.value) && 
      !this.util.isEmpty(this.selectedDataSource.value) &&
      !this.util.isEmpty(this.selectedXAxisAttr.value)){
        this.settingsData = {
          chartType: this.selectedChartType.value,
          dataSource: this.selectedDataSource.value,
          xAxisLabel: this.selectedXAxisAttr.value,
          yAxisLabel: this.selectedYAxisAttr.value,
          reportTitle: this.selectedXAxisAttr.name,
          chartTitle: this.chartTitle,
          xAxisTitle: this.xAxisTitle,
          yAxisTitle: this.yAxisTitle
        }
        this.onSettingsEmit.emit({menu:this.menuItem, action: 'load', settings: this.settingsData})
      } else{
        this.util.alert('error','Missing Information','Please fill all the details!!',false)
      }
    
  }
  onDataSourceChange(data:any){
    if(data.value){
      this.selectedXAxisAttr = {};
      this.loadXAxisValues()
    }
  }
}
