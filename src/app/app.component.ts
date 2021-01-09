import { Component } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: Task[] = [
    {title: 'Learn C', description: 'Learn C by doing project tutorials'},
    {title: 'Create Kanban Board', description: 'Develop Kanban Board in Angular'}
  ];
}
