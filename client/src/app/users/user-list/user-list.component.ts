import { Component } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  ngOnInit(): void {
    this.loadMembers();
  }

  members: Member[] = [];
  constructor(private memberService: MembersService){}

  loadMembers(){
    this.memberService.getMembers().subscribe({
      next: members => this.members = members
    });
  }
}
