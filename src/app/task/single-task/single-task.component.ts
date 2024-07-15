import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from "./single-task.model";
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-single-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.css'
})
export class SingleTaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
