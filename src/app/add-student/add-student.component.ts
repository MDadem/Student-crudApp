import { Classy } from './../model/classy.model';
import { StudentService } from './../services/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent implements OnInit {
  newStudent = new Student();
  classys!: Classy[];
  newidClass!: number;
  newClassy!: Classy;
  constructor(private studentService: StudentService, private router: Router) { }
  ngOnInit(): void {
    // this.studentService.listeClassys().subscribe(std => {
    //   this.classys = std._embedded.classys;
    // }
    // ); testtVid
    this.studentService.listeClassys().
      subscribe(cls => {
        this.classys = cls;
        console.log(cls);
      });


      }
  addStudent() {
        // // this.newStudent.classy = this.classys.find(cls => cls.idClass == this.newidClass)!;
        // this.studentService.ajouterStudent(this.newStudent).subscribe(std => {
        //   console.log(std);
        //   this.router.navigate(['students']); //testt
               
        this.newStudent.classy = this.classys.find(cls => cls.idClass == this.newidClass)!;
        this.studentService.ajouterStudent(this.newStudent)
          .subscribe(stud => {
            console.log(stud);
            this.router.navigate(['students']);

          });


      }
}
