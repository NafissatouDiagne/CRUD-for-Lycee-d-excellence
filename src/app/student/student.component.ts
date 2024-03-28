import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Studentss } from '../studentss/studentss';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  allStudents:any=[];
  allClasse:any=[];
  updateStudent:any;
  id:number=0;
lastname:string='';
firstname:string='';
class:string='';

  constructor(private data:DataService,private router:Router){}
ngOnInit(): void {
    this.data.getStudents().subscribe((response)=>{
this.allStudents=response;
console.log('this.allStudents', this.allStudents)
    });
    this.data.getClasses().subscribe((response)=>{
this.allClasse= response;
    })




}

addNewItem:Studentss={
  //id:0,
  lastname:'',
  firstname:'',
  class:''
  }
  getID(student: Studentss) {

   // this.id = student.id;
    this.lastname = student.lastname;
    this.firstname = student.firstname;
    this.class = student.class;
    this.updateStudent=student;
    console.log('this.updateStudent', this.updateStudent)
  }


  create() {
    this.data.addStudent(this.addNewItem).subscribe({
      next:(response) => {
        console.log('response', response);
        // Mettre à jour la liste des étudiants après l'ajout réussi
        this.data.getStudents().subscribe((students) => {
          this.allStudents = students;
          window.location.reload()
        });
      },
      error:(err) => {
        console.log('error', err);
      }})

  }

updateItem={
  //id:this.id,
    lastname:this.lastname,
    firstname:this.firstname,
    class:this.class
    }
  update(form: NgForm) {
    this.updateItem={
      lastname:form.value.lastname,
      firstname:form.value.firstname,
      class:form.value.class

    }
    console.log('updateItem', this.updateItem);
this.id=this.updateStudent.id;
    this.data.updateStudent(this.id, this.updateItem).subscribe({
      next: (response) => {
        console.log('update', response);
        this.data.getStudents().subscribe((students) => {
          this.allStudents = students;
          window.location.reload()
        });
      },
      error: (error) => {
        console.error('Une erreur s\'est produite lors de la mise à jour de l\'étudiant :', error);
      }
    });
  }
  delete(id: number) {
    this.data.deleteStudent(id).subscribe({
      next: (response) => {
        console.log('Étudiant supprimé avec succès');
        window.location.reload()
      },
      error: (error) => {
        console.error('Une erreur s\'est produite lors de la suppression de l\'étudiant :', error);
      }
    });
  }
Classe(){
  this.router.navigate(['/classe']);

}


}
