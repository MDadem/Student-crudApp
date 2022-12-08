import { StudentService } from './../services/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
  fullName!: string;
  students!: Student[];
  allStudents!:Student[];
  searchTerm!:string;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.listeStudent().subscribe(std => {
      console.log(std);
      // this.allStudents = std; //search list method
         this.students = std; //pipe search filter method
      });
  }
  rechercherStudents() {
    this.studentService.rechercherParNom(this.fullName).
      subscribe(std => {
        this.students = std;
        console.log(std)
      });
  }
  onKeyUp(filterText : string){
    this.students = this.allStudents.filter(item =>
    item.fullName.toLowerCase().includes(filterText));
    }

}
