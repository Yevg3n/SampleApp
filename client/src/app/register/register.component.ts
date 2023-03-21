import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private accountService: AccountService) {}
  
  @Output() cancelRegister = new EventEmitter();

  ngOnInit(): void {}
  
  model: any = {};

  register(){
    // for now, just display user input
    console.log(this.model);
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
        console.log('New user created');
      },
      error: error => console.log(error)
    })
  }

  cancel(){
    // When fired, just return to the main page
    console.log("Canceled");
    this.cancelRegister.emit(false)
  }
}
