import { Component, Input, OnInit } from "@angular/core";
import { TodosService, Todo, Post, AbstractObject } from "../posts.service";

@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
    @Input() inputName: string;

    isPost: boolean;
    abstractObject: AbstractObject[];
    constructor(private todosService: TodosService) { }

    addObj() {
        if (this.isPost) {
            this.addPost();
        } else {
            this.addTodo();
        }
    }

    addTodo() {
        let newObj: Todo = {
            title: this.inputName,
            completed: false
        };
        this.todosService.addTodo(newObj)
        .subscribe(obj => {
            console.log(obj);
            this.abstractObject.push(obj);
        });
    }

    addPost() {
        let newObj: Post = {
            title: this.inputName
        };
        this.todosService.addPost(newObj).subscribe(obj => {
            console.log(obj);
            this.abstractObject.push(obj);
        });
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