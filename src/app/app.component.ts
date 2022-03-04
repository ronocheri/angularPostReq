import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test';
  id="";
  errorMessage: any;
  //url="https://reqres.in/api/posts"
  token= "";
 url="https://reqres.in/api/register"
  constructor(private http: HttpClient) { }

  ngOnInit() {

    //for posts api
      // Simple POST request with a JSON body and response type <any>
  //     this.http.post<any>(this.url, { title: 'Angular POST Request Example' }).subscribe({
  //       next: data => {
  //           this.id = data.id;
  //           console.log(this.id)
  //       },
  //     error: error => {
  //         this.errorMessage = error.message;
  //         console.error('There was an error!', error);
  //       }
  //     })
  // }

  //for login api
  this.http.post<any>(this.url,  {"email": "eve.holt@reqres.in",
  "password": "pistol"}).subscribe({
    next: data => {
        this.id = data.id;
        this.token=data.token
        console.log(this.id)
        console.log(this.token)
    },
  error: error => {
      this.errorMessage = error.message;
      console.error('There was an error!', error);
    }
  })
}
}
