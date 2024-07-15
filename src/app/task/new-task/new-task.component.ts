import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';
import { NewTask } from '../single-task/single-task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');
  constructor(private taskService: TaskService) {}
  
  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDueDate(),
    },this.userId)
    this.close.emit();
  }
}
