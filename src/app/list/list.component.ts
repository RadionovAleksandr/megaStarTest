import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { TodosService, Todo, Post, AbstractObject } from '../posts.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  abstractObject: AbstractObject[] = []

  constructor(
    private router: Router,
    private todosService: TodosService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('List Page')
 

    this.todosService.observe()  // fetchTodos()
      .subscribe(obj => {
        console.log(obj)
        this.abstractObject = obj
      })
  }

  goToPostsPage() {
    this.router.navigate(['/posts'])
  }
}
