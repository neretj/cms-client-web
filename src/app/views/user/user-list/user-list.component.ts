import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onDelete(id: number): void {
    this.userService.delete(id).subscribe(result => {
      console.log(result);
    },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
