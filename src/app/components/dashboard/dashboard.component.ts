import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

/**
 * dashboard to view dynamic components
 * @export
 * @class DashboardComponent
 * @typedef {DashboardComponent}
 * @implements {OnInit}
 */
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
  showLandingPage!: boolean;

  /**
   * Creates an instance of DashboardComponent.
   * @constructor
   */
  constructor(){}
  
  ngOnInit(): void {
    this.displayLandingPage()
  }
  
  /**
   * action on starting to drag component onto dashboard
   * @param {string} menuItem
   */
  dragStart(menuItem: string){
    this.currentMenuItem = menuItem
  }
  
  /**
   * action on ending to drag component onto dashboard
   * @param {string} menuItem
   */
  dragEnd(menuItem: string){
    
  }
  
  /**
   * action upon a component dragged onto dashboard
   */
  addToDraggedMenu(){
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
    this.displayLandingPage()
  }

  /**
   * action on starting to drag and rearrange among already dragged components
   * @param {*} iIndex
   */
  dragStartIMenu(iIndex:any){
    this.startIndex = iIndex;
  }

  /**
   * action on ending to drag and rearrange among already dragged components
   * @param {*} iIndex
   */
  dragEndIMenu(iIndex:any){
    
  }

  /**
   * action upon rearranging already dragged components
   * @param {*} iIndex
   */
  dropIMenu(iIndex:any){
    let obj = this.draggedMenu[this.startIndex]
    this.draggedMenu.splice(this.startIndex,1)
    this.draggedMenu.splice(iIndex,0,obj)
    this.displayLandingPage()
  }

  /**
   * action on deleting a dragged component
   * @param {*} iIndex
   */
  deleteIMenu(iIndex:any){
    this.draggedMenu.splice(iIndex,1)
    this.displayLandingPage()
  }
  
  /**
   * action to display landing page when there are no dragged components on the dashboard
   */
  displayLandingPage(){
    if(this.draggedMenu.length == 0)
      this.showLandingPage = true;
    else
      this.showLandingPage = false;
  }
}
