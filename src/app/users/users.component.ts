import { Component, OnInit } from '@angular/core';
import { User } from '../user.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public usersList: User[];

  constructor(private usersService: UsersService){ }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.usersList = users;
    });
  }

  onUserDelete(id: number): void {
    this.usersList = this.usersList.filter(user => id !== user.id);
  }
}
