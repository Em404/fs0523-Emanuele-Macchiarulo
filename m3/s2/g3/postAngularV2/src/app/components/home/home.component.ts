import { Component } from '@angular/core';
import { IPost } from '../../models/i-post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts: IPost[] = [];
  constructor(private postsSvc: PostsService) {}

  ngOnInit() {
    this.posts = this.postsSvc.getAllPosts();
  }
}
