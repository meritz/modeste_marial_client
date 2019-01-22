import { Component, OnInit } from '@angular/core';

import { Todo, TodoService } from './../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, ModalController } from '@ionic/angular';

import { DedicacesPage } from './../dedicaces/dedicaces.page';
// import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  todo: Todo = {
    nom: '',
    task: '',
    telephone: 91269812,
    createdAt: new Date().getTime()
  };


  todoId = null;

  constructor(private route: ActivatedRoute,
              private nav: NavController,
              private todoService: TodoService,
              private modalController: ModalController,
              private loadingController: LoadingController) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId)  {
      this.loadTodo();
    }
  }

  // async openModal() {
  //   const modal = await this.modalController.create({
  //     component: DedicacesPage,
  //     // componentProps: {
  //     //   // custom_id: this.commandeService.currentArticle = article,
  //     // }
  //   });
  //   await modal.present();
  // }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();

    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }

  async saveTodo() {

    const loading = await this.loadingController.create({
      message: 'Saving Message..'
    });
    await loading.present();

    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.nav.goBack();
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.nav.goBack();
      });
    }

  }
}
