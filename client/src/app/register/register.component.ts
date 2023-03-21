import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor() {}
  @Output() cancelRegister = new EventEmitter();


  ngOnInit(): void {}
  
  model: any = {};

  register(){
    // for now, just display user input
    console.log(this.model);
  }

  cancel(){
    // When fired, just return to the main page
    console.log("Canceled");
    this.cancelRegister.emit(false)
  }
}
