import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewTargot } from '../../models/newTargot';
import { TargotServiceProvider } from '../../providers/targot-service/targot-service';

/**
 * Generated class for the AddTargotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-targot',
  templateUrl: 'add-targot.html',
})
export class AddTargotPage {

  newTargot: NewTargot = {
    name:undefined,
    definition:undefined,
    value:undefined,
    daysWeek:undefined
  }
  constructor(public navCtrl: NavController, private targotService: TargotServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTargotPage');
  }

  public commit() {
    this.targotService.addTargot(this.newTargot);
    this.navCtrl.popToRoot();
  }

}
