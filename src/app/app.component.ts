import { Component } from '@angular/core'
import { TodosService, Todo, Post, AbstractObject } from './posts.service'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    todos: Todo[]
    posts: Post[]
    abstractObject: AbstractObject[]

    constructor(private todosService: TodosService) { }

    fetchTodos() {
        console.log(1111)
        this.todosService.fetchTodos()
            .subscribe(todo => {
                this.abstractObject = this.todosService.todos = todo
                console.log(this.abstractObject)
            })
    }

    fetchPosts() {
        console.log(2222)
        this.todosService.fetchPosts()
            .subscribe(post => {
                
                this.abstractObject = this.todosService.posts = post
                console.log(this.abstractObject)
            })
    }
}

