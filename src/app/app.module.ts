import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParClassyComponent } from './recherche-par-classy/recherche-par-classy.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { ListeClassysComponent } from './liste-classys/liste-classys.component';
import { UpdateClassyComponent } from './update-classy/update-classy.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    RechercheParClassyComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeClassysComponent,
    UpdateClassyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
