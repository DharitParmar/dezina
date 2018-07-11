import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ProductProvider} from '../../providers/product/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private http: Http, public navCtrl: NavController, private productProvider: ProductProvider) {

  }

  ionViewDidLoad(){
    this.productProvider.getProduct()
    .subscribe(response => console.log(response));
  }
}
