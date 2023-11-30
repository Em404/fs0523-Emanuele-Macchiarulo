import { Component } from '@angular/core';
import { IUser } from '../../models/i-post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: IUser[] = []
  constructor(private postSvc: PostsService){}

  ngOnInit() {
    this.users = this.postSvc.getAllUsers()
  }
}
