import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Priere {
  id?: string;
  nom: string;
  task: string;
  priority: number;
  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class PriereService {

  private prieresCollection: AngularFirestoreCollection<Priere>;

  private prieres: Observable<Priere[]>;

  constructor(db: AngularFirestore) {
    this.prieresCollection = db.collection<Priere>('prieres');

    this.prieres = this.prieresCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }

   getTodos() {
    return this.prieres;
  }

  getTodo(id) {
    return this.prieresCollection.doc<Priere>(id).valueChanges();
  }

  updateTodo(priere: Priere, id: string) {
    return this.prieresCollection.doc(id).update(priere);
  }

  addTodo(priere: Priere) {
    return this.prieresCollection.add(priere);
  }

  removeTodo(id) {
    return this.prieresCollection.doc(id).delete();
  }
}
