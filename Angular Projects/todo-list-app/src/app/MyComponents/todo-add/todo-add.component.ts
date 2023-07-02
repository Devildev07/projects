import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { todos } from 'src/app/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  title: string | undefined;
  desc: string | undefined;
  @Output() todoAdd: EventEmitter<todos> = new EventEmitter();

  ngOnInit(): void {}
  onSubmit() {
    const todo = {
      sno: 2,
      title: this.title,
      desc: this.desc,
      active: true,
    };

    this.todoAdd.emit(todo);
  }
}
