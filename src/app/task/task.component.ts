import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SingleTaskComponent } from "./single-task/single-task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './single-task/single-task.model';
import { CardComponent } from "../shared/card/card.component";
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [SingleTaskComponent, NewTaskComponent, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  };

  onCompleteTask(id: string) {
    this.taskService.removeTask(id)
  }
  
  onAddTask(taskData: NewTask) {
    this.taskService.addTask(taskData, this.userId);
  }

  onStartNewTask() {
    this.isAddingTask = true;
  }

  onCancel() {
    this.isAddingTask = false;
  }
}
