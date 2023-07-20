import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

/**
 * configured routes
 * @type {Routes}
 */
const routes: Routes = [{
  path:'',redirectTo:'dashboard',pathMatch:'full'
},
{
  path:'dashboard',component:DashboardComponent
}];

/**
 * routing module
 * @export
 * @class AppRoutingModule
 * @typedef {AppRoutingModule}
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, initialNavigation: 'disabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
