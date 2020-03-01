import { Component, Input } from '@angular/core'
import { TodosService, Todo, Post  } from '../posts.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  @Input() inputName: string
  todoTitle = 'новое обращение'

  todos: Todo[] = this.todosService.todos;
  constructor(private todosService: TodosService) { }

  addTodo() {
    const newTodo: Todo = {
      title: this.inputName,
      completed: false
    }
    this.todosService.addTodo(newTodo)
      .subscribe(todo => {
        console.log(todo)
        this.todos.push(todo)
      })
  }
}
