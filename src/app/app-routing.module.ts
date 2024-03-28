import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './studentss/home/home.component';
import { CommonModule } from '@angular/common';
import { ClasseComponent } from './classe/classe.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [

  {path:'',component:StudentComponent},
  {path:'**',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,CommonModule]
})
export class AppRoutingModule { }
