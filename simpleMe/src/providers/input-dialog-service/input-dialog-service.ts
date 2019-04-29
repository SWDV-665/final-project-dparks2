
import { Injectable } from '@angular/core';
import { TaskServiceProvider } from '../../providers/task-service/task-service';
import { AlertController, ModalController } from 'ionic-angular';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {
  modalPage;
  constructor(public dataService: TaskServiceProvider, public alertCtrl: AlertController, public modalCtrl : ModalController) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  public openModal(task?, index?) {
    console.log('Open');
    var data = {
      modalTitle: task ? 'Edit Task' : 'Add Task',
      modalMessage : task ? 'Please edit task' : 'Please enter a new task',
      title : task ? task.title : null,
      time : task ? task.time : null,
      category : task ? task.category : null,
    };
    this.modalPage = this.modalCtrl.create('ModalPage', data);
    this.modalPage.onDidDismiss(returnedDataFromModal => {
      if(returnedDataFromModal!=undefined) {
        if(index !== undefined) {
          this.dataService.editTask(returnedDataFromModal, index);
        } else {
          this.dataService.addTask(returnedDataFromModal);
        }
      }
    });
    this.modalPage.present();
  }
}
