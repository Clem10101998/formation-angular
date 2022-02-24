import { Component, OnInit, Type } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-polynomes',
  templateUrl: './polynomes.component.html',
  styleUrls: ['./polynomes.component.css']
})
export class PolynomesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

  isShowSolution = false;

  error(){
    if(typeof this.a != "number"){
      return false;
    }
    // else if(typeof this.b != "number"){
    //   return true;
    // }
    // else if(typeof this.c != "number"){
    //   return true;
    // }else{
    //   return false;
    // }
    return false;
  }

}
