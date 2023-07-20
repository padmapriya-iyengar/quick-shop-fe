import { Component, OnInit } from '@angular/core';

/**
 * landing page - displayed only when there are no components dragged
 * @export
 * @class LandingPageComponent
 * @typedef {LandingPageComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit{
  
  /**
   * Creates an instance of LandingPageComponent.
   * @constructor
   */
  constructor(){}
  
  ngOnInit(): void {
    
  }
}
