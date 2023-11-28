import { Injectable } from '@angular/core';
import { IPost } from '../models/i-post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts:IPost[] = [
    {
      "id":1,
      "body":"sit minim deserunt enim enim nisi. Elusmod incididunt dolore et ea ania. won exercitatios 1d volaptate et",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor etusmod.",
      "active":true
    },
    {
      "id":2,
      "body":"sit minim deserunt enim enim nisi. Elusmod incididunt dolore et ea ania. won exercitatios 1d volaptate et",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor etusmod.",
      "active":true
    },
    {
      "id":3,
      "body":"sit minim deserunt enim enim nisi. Elusmod incididunt dolore et ea ania. won exercitatios 1d volaptate et",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor etusmod.",
      "active":true
    },
    {
      "id":4,
      "body":"sit minim deserunt enim enim nisi. Elusmod incididunt dolore et ea ania. won exercitatios 1d volaptate et",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor etusmod.",
      "active":false
    },
    {
      "id":5,
      "body":"sit minim deserunt enim enim nisi. Elusmod incididunt dolore et ea ania. won exercitatios 1d volaptate et",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor etusmod.",
      "active":false
    }
  ]

  getActivePosts(){
    return this.posts.filter(p => p.active)
  }
  getInactivePosts(){
    return this.posts.filter(p => !p.active)
  }

}
