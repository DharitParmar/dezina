import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProductProvider} from '../../providers/product/product';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public allBestSellerProducts = [];

  constructor(public navCtrl: NavController, private productProvider: ProductProvider) {

  }

  ionViewDidLoad(){
    this.productProvider.getProduct()
      .subscribe((allProducts) => {
        this.allBestSellerProducts = allProducts.filter(product => product.bestSeller == true);
        // console.log(this.allBestSellerProducts);
      })
  }
}
