import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { of, Observable, BehaviorSubject, from, fromEvent, concat, forkJoin } from 'rxjs';
import { map, filter, tap, share, switchMap, debounceTime, distinctUntilChanged, shareReplay, takeWhile, mergeMap } from 'rxjs/operators';
import { UserService } from '../services/user-service/user.service';
import { Person } from '../models/person';
import { Post } from '../models/post';
import { PostsService } from '../services/posts/posts.service';
import { PostWithComments } from '../models/post-with-comments';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, AfterViewInit {


  form: FormGroup;
  private person = new Person('Adriano', 34)
  private testingTap = of(this.person)
  private testingMap = of(this.person)
  private testingMapArray = of([this.person, this.person])
  private observableNumber = of([1, 2, 3]);
  posts: Post[] = [];
  private loading = false;
  filterString$ = new BehaviorSubject<string>(null);

  constructor(private _fb: FormBuilder,
    private _userService: UserService,
    private _http: HttpClient,
    private _postService: PostsService
  ) { }

  ngOnInit() {




    this.form = this._fb.group({
      title: this._fb.control('', [Validators.required]),
    })

    this.testingFromAndOf();

    this.tapTesting();
    this.makingJustOneRequest();
    this.switachMapTesting();
    this.testingObservableNumber();
    this.testingObservableForm();
    this.mapTesting();
    this.mapTestingArray();
    this.margeMapTesting();
    this.testingConcat();
    this.testingForkJoin();
  }

  ngAfterViewInit() {
    this.filterString$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((element: any) => {
        if (!element || (<string>element.target.value).trim() == '') {
          return of([]);
        }
        return this._postService.getPosts().pipe(
          map(post => {
            const inputValue: string = element.target.value;
            return post.filter(p => p.title.toLowerCase().trim().includes(inputValue.toLowerCase().trim()))
          })
        )
      })
    ).subscribe((response: Post[]) => {
      this.posts = response || [];
    })


    this.getElement();

  }

  getElement() {

    const element = document.getElementById("ui")
    const uiElement = fromEvent(document, 'click');
    let counter = 0;
    uiElement.pipe(
      takeWhile(()=> counter < 3)
    ).subscribe((res) => {
      console.log(`click  ${counter}`);
      counter++;
    })

  }

  submitForm() {

  }


  testingFromAndOf() {

    const personObservable = of(this.person);
    const personPromisse = Promise.resolve(this.person);

    // parsing promisse to observable 

    const personPromisseToObservable: Observable<Person> = from(personPromisse);
    personPromisseToObservable.subscribe((resoponse) => { console.log("parsing promisse to observable ", resoponse) })
  }

  // tap dont touch in data of observable 
  tapTesting() {

    // to user tap we need to subscribe in observable 
    this.testingTap.pipe(
      tap(user => localStorage.setItem('access_token', JSON.stringify(user)),

      )
    ).subscribe()
  }

  makingJustOneRequest() {
    const request = this._postService.getComments().pipe(
      shareReplay()
    );

    this.setLoaderSpinner(request)
    request.subscribe((response) => {
      console.log("makingJustOneRequest ", response)
    })
  }

  setLoaderSpinner(observable: Observable<any>) {
    this.loading = true;
    observable.subscribe(() => this.loading = false)
  }


  testingObservableNumber() {

    this.observableNumber.pipe(
      map((data: number[]) => {
        return data.map(x => x * 2);
      }),

    ).subscribe((data) => {
      console.log("data ", data)
    })
  }

  transform(value: string) {
    console.log(value.toUpperCase())

  }

  testingObservableForm() {
    this.form.valueChanges.pipe(
      filter(data => this.form.valid),
      map(data => data))
      .subscribe(data => {
        console.log("data valid ", data)
      })
  }




  mapTesting() {
    this.testingMap.pipe(
      map((person: Person) => {
        return {
          name: `${person.name.toUpperCase()} [dentro do map]`,
          age: 31
        }

      },

      )).subscribe((person) => {
        console.log('person in map ', person)
      })
  }

  mapTestingArray() {

    this.testingMapArray.pipe(
      map((people: Person[]) => {
        return people.map((person: Person) => {
          return {
            name: `${person.name} [aqui dentro do map ]`,
            age: person.age + 100
          }
        })
      })
    ).subscribe((people) => {
      console.log("mapTestingArray people", people)
    })
  }







  switachMapTesting() {

    console.log("Testing seitchmap")

    const postsObs = this._postService.getPosts();
    const commentObs = this._postService.getComments();

    const combineded = postsObs.pipe(
      switchMap(posts => {
        return commentObs.pipe(
          tap(comments => {
            console.log("posts ", posts)
            console.log("comments ", comments)
          })
        )
      })
    )

    // on the response the combinededObservable will only retorn the comments, cuz the postsObs 
    // have been canceled to call commentObs and return it
    combineded.subscribe((response) => {
      console.log("seitchmap response ", response)
    })
  }

  search($event) {

    console.log("$event", $event)

    of($event).pipe(
      debounceTime(2000),

      switchMap(searchitem => {

        console.log('dentro do switchmap')
        if (!searchitem || searchitem == null) {
          return []
        }

        return this._postService.getPostSearching($event);

      })).subscribe(response => this.posts = response)

  }

  serach2($event) {
    console.log("search2 ")
    this.filterString$.next($event);
  }

  margeMapTesting(){
    const comments = this._postService.getComments();
    const posts = this._postService.getPosts();

    const onePost    = this._postService.getOnePost();
    const oneComment = this._postService.getOneComment();

    
    onePost.pipe(
      mergeMap(post => {
        return oneComment.pipe(
           map(comment => {

             return new PostWithComments(post,comment)
          })
        )
      })
    ).subscribe((postWithComment) => {
      console.log('postwith comment ', postWithComment)
    })


  }


  // concat no return a array of object, just one object 

  testingConcat(){
      const posts = this._postService.getOnePost();
      const comments = this._postService.getOneComment();

      const concatObservable = concat(posts,comments);

      concatObservable.subscribe((data) => {
        console.log("concate response", data)
      })
  }

  testingForkJoin(){

    const posts = this._postService.getPosts();
    const comments = this._postService.getComments();

    const forkjoin = forkJoin(posts,comments);
   
    forkjoin.subscribe( response => console.log("forkjoin ", response))
  }





  private getPosts(): Observable<any> {

    // share method is to share the request and not to call another time the endpoint
    return this._http.get(`https://testingrequest.free.beeceptor.com/posts`).pipe(
      share()
    );
  }

  private getComments(): Observable<any> {

    return this._http.get(`https://testingrequest.free.beeceptor.com/comments`);
  }


}
