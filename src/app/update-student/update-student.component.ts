import { Student } from './../model/student.model';
import { Classy } from './../model/classy.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styles: [
  ]
})
export class UpdateStudentComponent implements OnInit {
  currentStudent = new Student();
  classys !: Classy[];
  updatedClassId!: number;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private studentService: StudentService) { }

  ngOnInit(): void {

    this.studentService.listeClassys().subscribe(cls => {
        this.classys = cls;
        console.log(cls);
      });

    this.studentService.consulterStudent(this.activatedRoute.snapshot.params['id']).
      subscribe(stud => { this.currentStudent = stud; 
        this.updatedClassId=this.currentStudent.classy.idClass;})

  }
  updateStudent() {
    this.currentStudent.classy = this.classys.find((classy)=>classy.idClass==this.updatedClassId)!
    this.studentService.updateStudent(this.currentStudent).subscribe(stud => {
      this.router.navigate(['students']);
    }
    );
  }

}
