import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todos } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: todos = new todos();
  @Input() i: number | undefined;
  @Output() todoDelete: EventEmitter<todos> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<todos> = new EventEmitter();
  ngOnInit(): void {}

  onClick(todo: todos) {
    this.todoDelete.emit(todo);
    console.log('Delete Btn');
  }
  onCheckboxClick(todo: todos) {
    this.todoCheckbox.emit(todo);
    console.log('Checked ');
  }
}
