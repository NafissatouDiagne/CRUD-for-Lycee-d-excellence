import { Component, OnInit } from '@angular/core';
import { Studentss } from '../studentss';
import { DataService } from '../../data.service';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone:true,
  imports:[CommonModule]
})
export class HomeComponent implements OnInit {
allStudents:Studentss[]=[]
  constructor(private data:DataService){}
ngOnInit(): void {
    this.data.getStudents().subscribe((response)=>{
this.allStudents=response;
    })
}


addNewItem:Studentss={
  //id:0,
  lastname:'',
  firstname:'',
  class:''
  }
  create() {
    this.data.addStudent(this.addNewItem).subscribe({
      next:(response) => {
        console.log('response', response);
        // Mettre à jour la liste des étudiants après l'ajout réussi
        this.data.getStudents().subscribe((students) => {
          this.allStudents = students;
        });
      },
      error:(err) => {
        console.log('error', err);
      }})

  }


}
