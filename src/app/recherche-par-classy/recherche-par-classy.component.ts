import { StudentService } from './../services/student.service';
import { Classy } from './../model/classy.model';
import { Student } from './../model/student.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-par-classy',
  templateUrl: './recherche-par-classy.component.html',
  styles: [
  ]
})
export class RechercheParClassyComponent implements OnInit {
  // studentService!: StudentService;
  
  students! : Student[];
  IdClass! : number;
  classys! : Classy[];
  constructor() { }

  ngOnInit(): void {
    // this.studentService.listeClassys().
    // subscribe(cls => {this.classys = cls._embedded.categories;
    // console.log(cls);
    // });

  }
  // onChange() {
  //   this.StudentService.rechercherParClassy(this.IdClass).
  //   subscribe(std =>{this.students=std});
  //   }

}
