import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core'
import { TodosService, Todo, Post, AbstractObject, } from './posts.service'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    // changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {

    todos: Todo[]
    posts: Post[]
    abstractObject: AbstractObject[]

    constructor(
        private todosService: TodosService,
        private cd: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.fetchTodos()
    }

    fetchTodos() {
        this.todosService.switchPosts(false)
        this.todosService.fetchTodos()
            .subscribe(todo => {
                this.abstractObject = this.todosService.todos = todo
                this.cd.markForCheck()
                console.log(this.abstractObject)
            })
    }

    fetchPosts() {
        this.todosService.switchPosts(true)
        this.todosService.fetchPosts()
            .subscribe(post => {
                this.abstractObject = post
                this.cd.markForCheck()
                console.log(post)
                console.log(this.abstractObject)
            })
    }
}

