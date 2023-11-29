import { Injectable } from '@angular/core';
import { IPost } from '../models/i-post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: IPost[] = [
    {
      id: 1,
      body: 'sit minim deserunt enim enim nisi. Elusmod incididunt dolore et ea ania. won exercitatios 1d volaptate et',
      title:
        'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor etusmod.',
      active: true,
      topic: 'news',
    },
    {
      id: 2,
      body: 'sit minim deserunt enim enim nisi. Elusmod incididunt dolore et ea ania. won exercitatios 1d volaptate et',
      title:
        'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor etusmod.',
      active: true,
      topic: 'politic',
    },
    {
      id: 3,
      body: 'sit minim deserunt enim enim nisi. Elusmod incididunt dolore et ea ania. won exercitatios 1d volaptate et',
      title:
        'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor etusmod.',
      active: true,
      topic: 'education',
    },
    {
      id: 4,
      body: 'sit minim deserunt enim enim nisi. Elusmod incididunt dolore et ea ania. won exercitatios 1d volaptate et',
      title:
        'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor etusmod.',
      active: false,
      topic: 'news',
    },
    {
      id: 5,
      body: 'sit minim deserunt enim enim nisi. Elusmod incididunt dolore et ea ania. won exercitatios 1d volaptate et',
      title:
        'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor etusmod.',
      active: false,
      topic: 'politic',
    },
  ];

  getAllPosts() {
    return this.posts;
  }

  getActivePosts() {
    return this.posts.filter((p) => p.active);
  }

  getInactivePosts() {
    return this.posts.filter((p) => !p.active);
  }

  togglePost(post:IPost): void {
    post.active = !post.active
  }

}
