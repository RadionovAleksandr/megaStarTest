import { Component, OnInit, Input } from '@angular/core';
import { TodosService, Todo, Post, AbstractObject } from '../posts.service'

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})


export class EditComponent implements OnInit {
    @Input() inputName: string

    isPost: boolean;
    abstractObject: AbstractObject[];
    constructor(private todosService: TodosService) { }

    edit(id, inputName) {
        console.log('editObj')
        if (this.isPost) {
            this.editPost(id, inputName);
        } else {
            this.editTodo(id, inputName);
        }
    }

    editTodo(id, inputName) {
        this.todosService.editTodo(id, inputName)
    }

    editPost(id, inputName) {
        this.todosService.editTodo(id, inputName)
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
