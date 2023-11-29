import { Component } from '@angular/core';
import { IPost } from '../../models/i-post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss',
})
export class ActiveComponent {
  posts: IPost[] = [];
  constructor(private postsSvc: PostsService) {}

  ngOnInit() {
    this.posts = this.postsSvc.getActivePosts();
  }

  toggleInactive(post:IPost): void {
    this.postsSvc.togglePost(post)
    this.posts = this.postsSvc.getActivePosts()
  }

}
