import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Classes } from './classes';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrl: './classe.component.css'
})
export class ClasseComponent implements OnInit{

    allclasses:any=[];
    updateclasse:any;
    id:number=0;
  name:string='';


    constructor(private data:DataService,private router:Router){}
  ngOnInit(): void {
      this.data.getClasses().subscribe((response)=>{
  this.allclasses=response;
  console.log('this.allclasses', this.allclasses)
      })


  }

  addNewItem:Classes={
    name:''
    }
    getID(classe: Classes) {
     // this.id = classe.id;
      this.name = classe.name;

      this.updateclasse=classe;
      console.log('this.updateclasse', this.updateclasse)
    }
    updateItem={
      name:this.name
    }

    create() {
      this.data.addclasse(this.addNewItem).subscribe({
        next:(response) => {
          console.log('response', response);
          // Mettre à jour la liste des étudiants après l'ajout réussi
          this.data.getClasses().subscribe((classes) => {
            this.allclasses = classes;
            window.location.reload()
          });
        },
        error:(err) => {
          console.log('error', err);
        }})

    }


    update(form: NgForm) {
      this.updateItem={
        name:form.value.name
      }
      this.id=this.updateclasse.id;
      console.log('updateItem', this.updateItem);

      this.data.updateclasse(this.id, this.updateItem).subscribe({
        next: (response) => {
          console.log('update', response);
          this.data.getClasses().subscribe((classes) => {
            this.allclasses = classes;
            window.location.reload()
          });
        },
        error: (error) => {
          console.error('Une erreur s\'est produite lors de la mise à jour de l\'étudiant :', error);
        }
      });
    }
    delete(id: number) {
      this.data.deleteclasse(id).subscribe({
        next: (response) => {
          console.log('Étudiant supprimé avec succès');
          window.location.reload()
        },
        error: (error) => {
          console.error('Une erreur s\'est produite lors de la suppression de l\'étudiant :', error);
        }
      });
    }

StudentClasse(){
  this.router.navigate([''])
}


}
