import { Component } from '@angular/core';
import { IPost } from '../../models/i-post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss'
})
export class ActivePostComponent {
  posts:IPost[] = []

  constructor(private postsSvc:PostsService){}

  ngOnInit(){
    this.posts = this.postsSvc.getActivePosts()
  }
}
