import { Component, OnInit } from '@angular/core';

//
import { Priere, PriereService } from './../services/priere.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  priere: Priere = {
    nom: '',
    task: '',
    createdAt: new Date().getTime(),
    priority: 22229922
  };


  priereId = null;

  constructor(private route: ActivatedRoute,
              private nav: NavController,
              private priereService: PriereService,
              private loadingController: LoadingController) { }

  ngOnInit() {
    this.priereId = this.route.snapshot.params['id'];
    if (this.priereId)  {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();

    this.priereService.getTodo(this.priereId).subscribe(res => {
      loading.dismiss();
      this.priere = res;
    });
  }

  async saveTodo() {

    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();

    if (this.priereId) {
      this.priereService.updateTodo(this.priere, this.priereId).then(() => {
        loading.dismiss();
        this.nav.goBack();
      });
    } else {
      this.priereService.addTodo(this.priere).then(() => {
        loading.dismiss();
        this.nav.goBack();
      });
    }

  }

}
