import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { Studentss } from './studentss/studentss';
import { Classes } from './classe/classes';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000/Students';

  constructor(private http: HttpClient) {}

  // Récupérer tous les étudiants
  getStudents(){
    return this.http.get<Studentss[]>(this.apiUrl);
  }

  // Ajouter un nouvel étudiant
  addStudent(student: any) {
    return this.http.post(`${this.apiUrl}`,student)
  }
// Mettre à jour un étudiant
updateStudent(id: number, data: any) {
  return this.http.put(`${this.apiUrl}/${id}`, data);}


  // Supprimer un étudiant
  deleteStudent(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }


  /**
   *
   * Classes
   */
  private api = 'http://localhost:3000/Classes';



  // Récupérer tous les étudiants
  getClasses(){
    return this.http.get<Classes[]>(this.api);
  }

  // Ajouter un nouvel étudiant
  addclasse(classe: any) {
    return this.http.post(`${this.api}`,classe)
  }
// Mettre à jour un étudiant
updateclasse(id: number, data: any) {
  return this.http.put(`${this.api}/${id}`, data);}


  // Supprimer un étudiant
  deleteclasse(id: number){
    return this.http.delete(`${this.api}/${id}`)
  }
}
