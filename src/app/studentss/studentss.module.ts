import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentssRoutingModule } from './studentss-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    StudentssRoutingModule,
    FormsModule
  ]
})
export class StudentssModule { }
