import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  mySnap!: FaceSnap;

  otherSnap!: FaceSnap;

  ngOnInit(): void {
    
    this.mySnap = {
      title: "hello", 
      description: "Best friend", 
      imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      createdDate: new Date(),
      snaps: 0
    };

    this.otherSnap = {
      title: "hello other", 
      description: "Best friend other", 
      imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      createdDate: new Date(),
      snaps: 0,
      location: "Bretagne"
    }

  }
}


