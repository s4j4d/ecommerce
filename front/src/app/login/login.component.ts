import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  phone: string|undefined = "";
  list: any[] = [];

  ngOnInit(): void {

  }

  doLogin() {
    console.log(this.phone)
    this.http.get('https://reqres.in/api/users?page=2')
    .subscribe((data: any) => {
      this.list = data.data;
  });
  }

  phoneChanged(event: any) {
    this.phone = event.target.value;
  }

}
