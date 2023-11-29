import { Component } from '@angular/core';
import { IPost } from '../../models/i-post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrl: './inactive.component.scss',
})
export class InactiveComponent {
  posts: IPost[] = [];
  constructor(private postsSvc: PostsService) {}

  ngOnInit() {
    this.posts = this.postsSvc.getInactivePosts();
  }
}
