import { Component, OnInit, Input } from '@angular/core';
import { TodosService, Todo, Post  } from '../posts.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})


export class EditComponent implements OnInit {
  @Input() inputName: string

  todos: Todo[] = this.todosService.todos

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  editTodo(id, inputName) {
    this.todosService.editTodo(id, inputName)
  }
}
