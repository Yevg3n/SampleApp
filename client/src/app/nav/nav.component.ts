import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router){}

  ngOnInit(): void{}

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.router.navigateByUrl('/users')
      },
      error: error => console.log(error)
    })
    console.log(this.model);
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }

}
