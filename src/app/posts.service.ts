import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, Subject, BehaviorSubject } from 'rxjs'
import { delay, tap,  } from 'rxjs/operators'


export  interface AbstractObject {
    completed?: boolean
    id?: number
    userId?: number
    title?: string
    body?: string
}

export interface Todo {
    completed: boolean
    title: string
    id?: number
}
export interface Post {
    userId?: number
    id?: number
    title?: string
    body?: string
}

@Injectable({ providedIn: 'root' })
export class TodosService {

    todos: Todo[]
    posts: Post[]
    abstractObject$ = new Subject<AbstractObject[]>();
    isPost$ = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) { }

    observe(){
        return this.abstractObject$
    }

    observeActiveObj(){
        return this.isPost$
    }

    switchPosts(bool) {
        this.isPost$.next(bool)
    }


    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
    }

    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>('https://jsonplaceholder.typicode.com/todos', post)
    }

    editTodo(id: number, name: string, ) {
        this.todos.forEach(element => {
            if (element.id == id) {
                console.log(' element.title ' + element.title)
                console.log(' name ' + name)
                element.title = name
            }
        });
    }

    editPost(id: number, name: string, ) {
        this.posts.forEach(element => {
            if (element.id == id) {
                console.log(' element.title ' + element.title)
                console.log(' name ' + name)
                element.title = name
            }
        });
    }

    fetchTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
            .pipe(delay(500), tap(todos => this.abstractObject$.next(todos)))
    }

    fetchPosts(): Observable<Post[]> {
        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=3')
            .pipe(delay(500), tap(posts => this.abstractObject$.next(posts)))
    }

    removeTodo(id: number): Observable<void> {
        console.log(id)
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
    }
    removePost(id: number): Observable<void> {
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }
}
