import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ProductProvider} from '../../providers/product/product';
import {ProductDetailPage} from '../product-detail/product-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allProducts = [];

  constructor(private http: Http, public navCtrl: NavController, private productProvider: ProductProvider) {

  }

  ionViewDidLoad(){
    this.productProvider.getProduct()
    .subscribe(response => {
      this.allProducts = response;
    });
  }

  goToTheProductDetailPage(product){
    this.navCtrl.push(ProductDetailPage, {
      productDetails: product
      
    });
    console.log(product);
    
  }
}
