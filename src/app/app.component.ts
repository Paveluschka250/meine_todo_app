import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'meine_todo_app';
  newTodoText: string = '';
  currentFilter: 'all' | 'active' | 'completed' = 'all';

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

  deleteTodo(id: number): void {
    this.todoItems = this.todoItems.filter((item) => item.id !== id);
  }

  addTodo(): void {
    if (this.newTodoText.trim()) {
      const newId = Math.max(...this.todoItems.map((item) => item.id)) + 1;
      this.todoItems.push({
        id: newId,
        text: this.newTodoText.trim(),
        completed: false,
      });
      this.newTodoText = ''; // Input leeren
    }
  }

  get filteredTodos(): TodoItem[] {
    switch (this.currentFilter) {
      case 'active':
        return this.todoItems.filter((todo) => !todo.completed);
      case 'completed':
        return this.todoItems.filter((todo) => todo.completed);
      default:
        return this.todoItems;
    }
  }

  getActiveTodosCount(): number {
    return this.todoItems.filter((todo) => !todo.completed).length;
  }

  getCompletedTodosCount(): number {
    return this.todoItems.filter((todo) => todo.completed).length;
  }

  setFilter(filter: 'all' | 'active' | 'completed'): void {
    this.currentFilter = filter;
  }
}

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}
