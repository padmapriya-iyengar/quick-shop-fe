import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter, CdkDragExit } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  menuConfig: any[] = [
    {dropIdentifier: 'charts',load:false},
    {dropIdentifier: 'loadOS',load:false},
    {dropIdentifier: 'loadPS',load:false},
    {dropIdentifier: 'loadCS',load:false},
    {dropIdentifier: 'loadPCS',load:false}
  ]
  draggedMenu: any[] = [];
  currentMenuItem!: string;
  startIndex:any = -1;

  constructor(){}
  
  ngOnInit(): void {
    
  }
  dragStart(menuItem: string){
    this.currentMenuItem = menuItem
  }
  dragEnd(menuItem: string){
    
  }
  addToDraggedMenu(){
    console.log(this.draggedMenu.length)
    let cIndex = _.findIndex(this.menuConfig,(obj) => { return obj.dropIdentifier == this.currentMenuItem }, 0)
    if(cIndex != -1){
      this.menuConfig[cIndex].load = true
      let dmIndex = _.findIndex(this.draggedMenu,(obj) => { return obj.dropIdentifier == this.currentMenuItem }, 0)
      if(this.currentMenuItem == 'charts' || dmIndex == -1)
      {
        let o = JSON.parse(JSON.stringify(this.menuConfig[cIndex]));
        this.draggedMenu.push(o);
      }
    }
  }
  dragStartIMenu(iIndex:any){
    this.startIndex = iIndex;
  }
  dragEndIMenu(iIndex:any){
    
  }
  dropIMenu(iIndex:any){
    let obj = this.draggedMenu[this.startIndex]
    this.draggedMenu.splice(this.startIndex,1)
    this.draggedMenu.splice(iIndex,0,obj)
  }
  deleteIMenu(iIndex:any){
    this.draggedMenu.splice(iIndex,1)
  }
}
