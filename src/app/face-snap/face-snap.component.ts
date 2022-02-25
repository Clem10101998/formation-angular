import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit {

 
  buttonText!: string;
  
  @Input() faceSnap!: FaceSnap;

  constructor() { }

  ngOnInit(): void {
    
    this.buttonText = 'Oh Snap!';
  }

  onSnap(){
    if(this.buttonText == 'Oh Snap!'){
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    }else{
      this.faceSnap.snaps --;
      this.buttonText = 'Oh Snap!';
    }
  }

}
