import { StudentService } from './../services/student.service';
import { Component, OnInit } from '@angular/core';
import { Classy } from '../model/classy.model';

@Component({
  selector: 'app-liste-classys',
  templateUrl: './liste-classys.component.html',
  styles: [
  ]
})
export class ListeClassysComponent implements OnInit {
  classy!: Classy[];
  updatedClass:Classy = {"idClass":0,"nomClass":"","descriptionClass":""};
  ajout:boolean=true;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.listeClassys().
      subscribe(cls => {
        this.classy = cls;
        console.log(cls);

      });
    }
    classyUpdated(cat:Classy){
      console.log("Cat updated event",cat);
      this.studentService.ajouterClassy(cat).
       subscribe( ()=> this.chargerClassys());
      }
      chargerClassys(){
        this.studentService.listeClassys().
        subscribe(cats => {this.classy = cats
        console.log(cats);
        });
        }
        updateClass(cat:Classy) {
          this.updatedClass=cat;
          this.ajout=false;
          }
  }

