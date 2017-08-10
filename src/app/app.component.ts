import { Component, ViewChild, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'; //must add this in for ngform

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  allLevels: string[];
  selectedLevel: string;

  constructor(){}

  ngOnInit(){
    this.allLevels = ["Beginner", "Advanced", "Pro"];
    this.selectedLevel = "Advanced";
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

}
