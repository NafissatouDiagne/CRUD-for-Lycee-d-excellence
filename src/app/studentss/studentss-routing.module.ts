import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {path:'student/home',component:HomeComponent},
  {path:'student/index',redirectTo:'student',pathMatch:'full'},
  {path:'',redirectTo:'student',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,FormsModule,CommonModule]
})
export class StudentssRoutingModule { }
