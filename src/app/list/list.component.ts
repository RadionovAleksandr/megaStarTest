import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { TodosService, Todo, Post, AbstractObject } from '../posts.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todos: Todo[] = []
  abstractObject: AbstractObject[] = []

  isPostActive: boolean = true
  isTodoActive: boolean = false

  constructor(
    private router: Router,
    private todosService: TodosService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('List Page')
    console.log(this.todos)

    if (this.isPostActive) {
      this.todosService.fetchTodos()
        .subscribe(todo => {
          console.log(todo)
          this.abstractObject = this.todosService.todos = todo
        })
    } else if (this.isTodoActive) {
      this.todosService.fetchPosts()
      .subscribe(post => {
        console.log(post)
        this.abstractObject = this.todosService.posts = post
      })
    }

  }

  goToPostsPage() {
    this.router.navigate(['/posts'])
  }
}
