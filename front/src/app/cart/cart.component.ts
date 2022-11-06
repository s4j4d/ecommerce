import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class CartComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  cartItems: any[] = [];

  ngOnInit(): void {
    this.doGetCart()
  }

  getItem(){
    return this.cartItems
  }

  doGetCart() {

    this.http.get('http://localhost:3000/api/cart')
    .subscribe((data: any) => {
      console.log(data);
      
      // if (data.length === 0) {
        // this.router.navigateByUrl('/cart-empty');
      // } else {
        this.cartItems = data;
      // }
  });

  }


  private getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return '';
}

  // doAddToCart() {
  //   this.http.post('http://localhost:3000/api/cart')
  //   // .subscribe((data: any) => {
  //   //   this.list = data.data;
  // // });
  // }

}
