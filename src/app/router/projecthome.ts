import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './projecthome.html',
})
export class ProjectHomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    
  }

  // onClick(){

  //   this.router.navigate(['/router/projectdetails'])
  // }

}