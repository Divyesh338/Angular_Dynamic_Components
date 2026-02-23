import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss'],
})
export class Task1Component implements OnInit {
  task: string = '';
  taskList: any[] = [];
  isEditing: boolean = false;
  editTaskId: number | null = null;
  subscription!: Subscription;

  constructor(private _dataService: DataService) {}
  ngOnInit(): void {
    this.getData();
    console.log(this.taskList);
  }

  addTask() {
    // if (this.task.trim() === '') return;
    // //edit Task
    // if (this.isEditing && this.editTaskId !== null) {
    //   const taskToEdit = this.taskList.find(
    //     (val) => val.id === this.editTaskId,
    //   );
    //   if (taskToEdit) {
    //     taskToEdit.value = this.task;
    //   }
    //   this.resetForm();
    //   return;
    // }
    // //Add task
    // this.taskList.push({
    //   id: this.taskList.length + 1,
    //   value: this.task,
    // });
    // this.task = '';
  }

  trackById(index: number, item: { id: number; value: string }) {
    return item.id;
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter((task) => task.id !== id);
  }

  resetForm() {
    this.task = '';
    this.isEditing = false;
    this.editTaskId = null;
  }

  editTask(task: { id: number; value: string }) {
    this.task = task.value;
    this.isEditing = true;
    this.editTaskId = task.id;
  }

  getData() {
    this._dataService.getTaskData().subscribe((res: any) => {
     console.log(res);
     this.taskList = res;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
