import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  genders = ['female', 'male'];
  signupForm!: FormGroup;

  //Définition du formulaire et des validators
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      //Multiple Validators
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('female'),
    });

    //Permet d'indiquer si le formulaire est valide
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

    //Set the value of each input
    this.signupForm.setValue({
      'username': 'Max',
      'email': 'max@gmail.com',
      'gender':'male'
    });
  }

  //Submitting form
  onSubmit(){
    console.log(this.signupForm.value);
    //Reset input after submitting
    this.signupForm.reset();
  }

  //Validator for username
  showErrorsforUsername(){
    const username = this.signupForm.controls.username;
    return username.hasError('required');
  }


}
