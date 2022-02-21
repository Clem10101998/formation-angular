import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Properties for two way Binding
  answer = '';
  defaultQuestion = 'pet';
  @ViewChild('f') signupForm: NgForm | undefined; //Accès au formulaire
  title = 'formation-angular';

  genders = ['female', 'male'];

  submitted = false;

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  onSubmit(form: NgForm){
    this.submitted = true;
    console.log(this.signupForm);//Vérification de la soumission du formulaire avec NgForm
    //Reset form after submission
    this.signupForm?.reset();
  }
}
