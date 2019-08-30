import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './ProjectDescription.html',
})
export class ProjectDescriptionComponent implements OnInit {
id="";
  constructor(public router: Router,private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    
  }

}