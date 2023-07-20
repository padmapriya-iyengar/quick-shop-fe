import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * bootstrap component
 * @export
 * @class AppComponent
 * @typedef {AppComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  /**
   * Creates an instance of AppComponent.
   * @constructor
   * @param {Router} router
   */
  constructor(private router: Router){}
  title = 'quick-shop';

  ngOnInit(): void {
    this.router.navigate(['dashboard'])
  }
}
