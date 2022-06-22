import { debounceTime, map, tap, share } from 'rxjs/operators';
import { Post } from './../../models/post';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Comment } from 'src/app/models/comment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }


  getPosts():Observable<Post[]>{


    return of([
      new Post('JAVA','Learning Java'),
      new Post('Angular','Learning Angular'),
      new Post('Node','Learning Node'),
    ])
 
  }

  getPostSearching(term:string):Observable<Post[]>{

    return this.getPosts().pipe(
      debounceTime(2000),
      map(post => post.filter( element => element.title.toLocaleLowerCase().includes( term.toLocaleLowerCase()))),
      tap( element => console.log('dentro do tap'))
      
      );
  }


  getComments():Observable<Comment[]>{

    return of([
      new Comment('Learning Java'),
      new Comment('Learning Angular'),
      new Comment('Learning Node'),
    ]).pipe(
      tap(obj => console.log("making one request for comment "))
    )
  }


  getOneComment():Observable<Comment>{
    return of(new Comment('Leaning Java'))
  };

  getOnePost():Observable<Post>{
    return of(new Post("Java Post","Java description post"))
  }
}
