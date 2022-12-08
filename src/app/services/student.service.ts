import { Classy } from './../model/classy.model';
import { Student } from './../model/student.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClassyWrapper } from '../model/classyWrapped.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  apiURL: string = 'http://localhost:8089/SpringMVC/api';
  apiURLClass: string = 'http://localhost:8089/SpringMVC/classe';
  students!: Student[];
  classys!:Classy[];
  constructor(private http: HttpClient) {

  }
  listeStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiURL);
  }

  


  ajouterStudent(stud: Student): Observable<Student> {
    return this.http.post<Student>(this.apiURL, stud, httpOptions);
  }

  supprimerStudent(id: number) {

    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  consulterStudent(id: number): Observable<Student> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Student>(url);
  }
  trierStudents() {//did'nt work 
    this.students = this.students.sort((n1, n2) => {
      if (n1.idStudent > n2.idStudent) {
        return 1;
      }
      if (n1.idStudent < n2.idStudent) {
        return -1;
      }
      return 0;
    });
  }
  listeClassys():Observable<Classy[]>{
    return this.http.get<Classy[]>(this.apiURL+"/classe");
    } //old




  updateStudent(stud: Student):Observable<Student> {
    return this.http.put<Student>(this.apiURL, stud, httpOptions);
    this.trierStudents()
  }
 
  // listeClassys(): Observable<ClassyWrapper> {
  //   return this.http.get<ClassyWrapper>(this.apiURLClass);
  // }


  // rechercherParClassy(idClass: number):Observable< Classy[]> {
  //   const url = `${this.apiURL}/prodscat/${idClass}`;
  //   return this.http.get<Student[]>(url);

  //   }
  rechercherParNom(nom: string):Observable< Student[]> {
    const url = `${this.apiURL}/studsByName/${nom}`;
    return this.http.get<Student[]>(url);
  }
  ajouterClassy( cat: Classy):Observable<Classy>{
    return this.http.post<Classy>(this.apiURLClass, cat, httpOptions);
    }
  
}