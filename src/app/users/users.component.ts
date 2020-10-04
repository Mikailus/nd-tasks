import { Component } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public usersList: User[] = [
    { id: 1, name: 'Jan', phone: 123123123, email: 'jan@jan' },
    { id: 2, name: 'Antek', phone: 456456465, email: 'antek@antek' },
    { id: 3, name: 'Tomek', phone: 789789789, email: 'tomek@tomek' },
    { id: 4, name: 'Radek', phone: 789789789, email: 'radek@radek' },
    { id: 5, name: 'Tomek', phone: 789789789, email: 'tomek@tomek' }
  ];

  onUserDelete(id: number): void {
    this.usersList = this.usersList.filter(user => id !== user.id);
  }
}
