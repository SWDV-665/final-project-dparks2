//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TaskServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskServiceProvider {

  constructor(/*public http: HttpClient*/) {
    console.log('Hello TaskServiceProvider Provider');
  }

  tasks = []

  getTasks() {
    return this.tasks;
  }
  removeTask(index){
    this.tasks.splice(index, 1);
  }

  addTask(task) {
    this.tasks.push(task);
  }

  editTask(task, index) {
    this.tasks[index] = task;
  }
  
}
