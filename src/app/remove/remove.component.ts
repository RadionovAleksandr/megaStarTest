import { Component, OnInit } from '@angular/core';
import { TodosService, Todo, Post, AbstractObject } from '../posts.service';

@Component({
    selector: 'app-remove',
    templateUrl: './remove.component.html',
    styleUrls: ['./remove.component.scss']
})
export class RemoveComponent implements OnInit {


    isPost: boolean;
    abstractObject: AbstractObject[];
    constructor(private todosService: TodosService) { }

    remove(id) {
        console.log('старт remove')
        if (this.isPost) {
            this.removePost(id);
        } else {
            this.removeTodo(id);
        }
    }

    removeTodo(id) {
        this.todosService.removeTodo(id)
            .subscribe(todo => {
                console.log(todo)
                this.todosService.todos = this.todosService.todos.filter(el => el.id !== id)
            })
    }

    removePost(id) {
        this.todosService.removeTodo(id)
            .subscribe(todo => {
                console.log(todo)
                this.todosService.todos  = this.todosService.todos.filter(el => el.id !== id)
            })
    }

    ngOnInit(): void {
        this.todosService
            .observeActiveObj()
            .subscribe(bool => {
                console.log(bool);
                this.isPost = bool;
            });

        this.todosService
            .observe()
            .subscribe(obj => {
                console.log(obj);
                this.abstractObject = obj;
            });
    }

}
