import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  polynome = new FormGroup({

  });
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  
  a = 0;
  b = 0;
  c = 0;

  delta = 0;
  x1 = 0;
  x2 = 0;

  getSolution(){

    this.delta = (this.b)**2 - 4*this.a*this.c;
    if(this.delta == 0){

      this.x1 = -this.b/(2*this.a);

    }else if(this.delta > 0){

      this.x1 = (-this.b - Math.sqrt(this.delta))/(2*this.a);
      this.x2 = (-this.b + Math.sqrt(this.delta))/(2*this.a);
    }

    return null;
  }

}
function sqrt(delta: number) {
  throw new Error('Function not implemented.');
}

