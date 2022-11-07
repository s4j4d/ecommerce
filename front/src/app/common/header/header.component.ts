import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CartComponent } from 'src/app/cart/cart.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService: CartComponent,private http: HttpClient, private router: Router) { }

  items = this.cartService.getItem()
  
  categoryItems: any[] = [];
  ngOnInit(): void {
    this.getMenu()
  }

  getMenu() {
    this.http.get('http://localhost:3000/api/product/category')
    .subscribe((data: any) => {
      console.log(data);
      
        this.categoryItems = data;
      // }
  });
  }





}
