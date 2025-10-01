import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meine_todo_app';
  todoItems = todos;
}

interface TodoItem {
  id: number;        // Eindeutige Nummer
  text: string;      // Der Text der Aufgabe
  completed: boolean; // Ist erledigt oder nicht?
}

let todos: TodoItem[] = [
  { id: 1, text: 'Angular lernen', completed: false },
  { id: 2, text: 'Todo-App bauen', completed: false },
  { id: 3, text: 'JavaScript üben', completed: true }
];