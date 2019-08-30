import { Component, OnInit } from '@angular/core';
import '../assets/LoadingBar.css'
import '../assets/fontawesome/css/font-awesome.min.css'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `

  // `
})


export class AppComponent implements OnInit {

  IsAppLoading = true;

  constructor(public router: Router) { }
  title = 'MobileDemo';

  ngOnInit(): void {
    setTimeout(() =>this.toProduct() , 2000);
    //this.IsAppLoading = false;
  
  }

  toProduct() {
    this.router.navigate(['main']);
    this.IsAppLoading = false;
  }

}