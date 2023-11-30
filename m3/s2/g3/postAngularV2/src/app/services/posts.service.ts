import { Injectable } from '@angular/core';
import { IPost, IUser } from '../models/i-post';

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
      author: 'Mimmo Flowers',
    },
    {
      id: 2,
      body: 'sit minim deserunt enim enim nisi. Elusmod incididunt dolore et ea ania. won exercitatios 1d volaptate et',
      title:
        'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor etusmod.',
      active: true,
      topic: 'politica',
      author: 'Mimmo Modem',
    },
    {
      id: 3,
      body: 'sit minim deserunt enim enim nisi. Elusmod incididunt dolore et ea ania. won exercitatios 1d volaptate et',
      title:
        'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor etusmod.',
      active: true,
      topic: 'education',
      author: 'Mimmo',
    },
    {
      id: 4,
      body: 'sit minim deserunt enim enim nisi. Elusmod incididunt dolore et ea ania. won exercitatios 1d volaptate et',
      title:
        'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor etusmod.',
      active: false,
      topic: 'news',
      author: 'Mimmone',
    },
    {
      id: 5,
      body: 'sit minim deserunt enim enim nisi. Elusmod incididunt dolore et ea ania. won exercitatios 1d volaptate et',
      title:
        'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor etusmod.',
      active: false,
      topic: 'politica',
      author: 'Mimmone Nazionale',
    },
  ];

  users: IUser[] = [
    {
      id: 0,
      name: 'Mimmo',
      email: 'mimmo@mail.com',
      role: 'user',
    },
    {
      id: 0,
      name: 'Flowers',
      email: 'flowers@mail.com',
      role: 'admin',
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

  togglePost(post: IPost): void {
    post.active = !post.active;
  }

  getAllUsers() {
    return this.users;
  }
}
