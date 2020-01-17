import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  
  taskList = [];
  taskName: any;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {  }
  addTask() {
    if (this.taskName.length > 0) {
        let task = this.taskName;
        this.taskList.push(task);
        this.taskName = "";
    }
  }
  deleteTask(index){
    this.taskList.splice(index, 1);
   }

}
