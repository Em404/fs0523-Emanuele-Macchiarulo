import { Component } from '@angular/core';
import { IPost } from '../../models/i-post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss'
})
export class InactivePostComponent {
  posts:IPost[] = []

  constructor(private postsSvc:PostsService){}

  ngOnInit(){
    this.posts = this.postsSvc.getInactivePosts()
  }
}
