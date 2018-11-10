import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebaseDatabase } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { NewTargot } from '../../models/newTargot';

/*
  Generated class for the TargotServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TargotServiceProvider {

  private targotList = this.db.list<NewTargot>('targot-list');

  constructor(private db: AngularFireDatabase) {
    console.log('Hello TargotServiceProvider Provider');
  }

  public addTargot(targot: NewTargot) {
    this.targotList.push(targot);
  }
}
