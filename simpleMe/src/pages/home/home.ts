import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TaskServiceProvider } from '../../providers/task-service/task-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public dataService: TaskServiceProvider, public inputService: InputDialogServiceProvider, public socialSharing: SocialSharing) {

  }

  loadTasks() {
    return this.dataService.getTasks();
  }
  deleteTask(task, index) {
    console.log("Removing task", task, index);

    this.dataService.removeTask(index);
  }

  shareTask(task, index) {
    console.log("Sharing task", task, index);

    let message = "Check out what I've been doing with my day!" + task.title;
    let subject = "I've been busy.";
    this.socialSharing.share(message, subject).then(() => {
      console.log("Shared successfully");
    }).catch((err) => {
      console.log("Error", err);
    });    
  }

  editTask(task, index) {
    console.log("Editing task", task, index);

    this.inputService.openModal(task, index);
  }

  addTask() {
    console.log("Adding item");
    this.inputService.openModal();
  }

}
