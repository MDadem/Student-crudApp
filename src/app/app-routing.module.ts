import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { RechercheParClassyComponent } from './recherche-par-classy/recherche-par-classy.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeClassysComponent } from './liste-classys/liste-classys.component';
const routes: Routes = [
  {path: "students", component : StudentsComponent},
  {path: "add-student", component : AddStudentComponent},
  { path: "", redirectTo: "students", pathMatch: "full" },
  {path: "updateStudent/:id", component: UpdateStudentComponent},
  {path: "rechercheParClassy", component : RechercheParClassyComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeClassys", component : ListeClassysComponent}



 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
