import { transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Task } from './task/task';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop'
import {MatDialog, MAT_DIALOG_SCROLL_STRATEGY_FACTORY} from '@angular/material/dialog'
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
  inProgress: Task[] = [];
  done: Task[] = [];
constructor(private dialog: MatDialog) {}
newTask(): void {
  const dialogRef = this.dialog.open(TaskDialogComponent, {
    width: '270px',
    data: {
      task: {},
    },
  });
  dialogRef .afterClosed() .subscribe((result: TaskDialogResult) => this.todo.push(result.task))
}

  editTask(list: string, task: Task): void {}
  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
}