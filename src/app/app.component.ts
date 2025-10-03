import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'meine_todo_app';

  todoItems: TodoItem[] = [
    { id: 1, text: 'Angular lernen', completed: false },
    { id: 2, text: 'Todo-App bauen', completed: false },
    { id: 3, text: 'JavaScript üben', completed: true },
    { id: 4, text: 'SCSS lernen', completed: false },
    { id: 5, text: 'TypeScript verstehen', completed: true },
  ];

  toggleTodo(id: number): void {
    const todo = this.todoItems.find((item) => item.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}
