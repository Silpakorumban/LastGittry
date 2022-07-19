import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';

import { HomeComponent } from './home/home.component';
import { ReachComponent } from './reach/reach.component';
import { WorksComponent } from './works/works.component';


const routes: Routes = [{path:"home" ,component:HomeComponent},{path:"aboutme",component:AboutmeComponent },
{path:"reach",component:ReachComponent}, {path:'works',component:WorksComponent}];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
