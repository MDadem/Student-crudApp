import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Classy } from '../model/classy.model';

@Component({
  selector: 'app-update-classy',
  templateUrl: './update-classy.component.html',
  styles: [
  ]
})
export class UpdateClassyComponent implements OnInit {
  @Input()
  classy!: Classy;
  @Output()
  classyUpdated = new EventEmitter<Classy>();
  @Input()
  ajout!:boolean;
  
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateClassy ", this.classy);
  }
  saveClassy() {
    this.classyUpdated.emit(this.classy);
  }



}
