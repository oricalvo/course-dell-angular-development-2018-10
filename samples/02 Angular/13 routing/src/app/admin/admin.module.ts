import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AdminComponent,
    AdminHomeComponent,
  ]
})
export class AdminModule { }
