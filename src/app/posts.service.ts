import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { delay } from 'rxjs/operators'

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
    abstractObject: AbstractObject[]

    constructor(private http: HttpClient) { }

    // getFirstObj() {

    // }

    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
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

    fetchTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
            .pipe(delay(500))
    }

    fetchPosts(): Observable<Todo[]> {
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/posts?_limit=2')
            .pipe(delay(500))
    }

    removeTodo(id: number): Observable<void> {
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
    }
}
