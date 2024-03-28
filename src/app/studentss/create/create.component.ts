import { Component, OnInit } from '@angular/core';
import { Studentss } from '../studentss';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  constructor(private dataservice:DataService,private router:Router){}
ngOnInit(): void {

}

addNewItem:Studentss={
  //id:0,
  lastname:'',
  firstname:'',
  class:''
  }
  create(){
    this.dataservice.addStudent(this.addNewItem).subscribe({
  next:(response)=>{
this.router.navigate(['student/home'])
  },
  error:(err)=>{
    console.log('error', err)
  }
    })
  }
}
