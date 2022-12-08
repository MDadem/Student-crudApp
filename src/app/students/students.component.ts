import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html'
})
export class StudentsComponent implements OnInit {
  students!: Student[];

  constructor(
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    
      this.chargerStudents(); //test parts 
  }
  chargerStudents() {
    this.studentService.listeStudent().subscribe(std => {
      console.log(std);
      this.students = std;
    });
  }
  supprimerStudent( s: Student) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.studentService.supprimerStudent(s.idStudent).subscribe(() => {
        console.log("Etudiant supprimé");
        this.chargerStudents();
      });
    }

}
