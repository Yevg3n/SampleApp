import { Component, Input } from '@angular/core';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() member: Member | undefined;
}
