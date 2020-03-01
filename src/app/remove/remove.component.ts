import { Component, OnInit } from '@angular/core';
import { TodosService, Todo, Post  } from '../posts.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss']
})
export class RemoveComponent implements OnInit {

  todos: Todo[] = this.todosService.todos;
  constructor(private todosService: TodosService) { }

  removeTodo(id) {
    this.todosService.removeTodo(id)
    .subscribe(todo => {
      console.log(todo)
      this.todos = this.todosService.todos = this.todosService.todos.filter( el => el.id !==id)
    })
  }

  ngOnInit() {
  }

}
