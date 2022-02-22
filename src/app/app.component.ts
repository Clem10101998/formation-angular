import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  numbers = [1,2,3,4,5];
  onlyOdd = false;
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
