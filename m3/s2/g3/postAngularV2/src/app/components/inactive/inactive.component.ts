import { IPost } from './../../models/i-post';
import { Component } from '@angular/core';
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

  // toggleActive(post: IPost): void {
  //   post.active = !post.active;
  // }

  toggleActive(post:IPost): void {
    this.postsSvc.togglePost(post)
    this.posts = this.postsSvc.getInactivePosts()
  }

}
