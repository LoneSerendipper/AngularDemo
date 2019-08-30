import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './ProjectPerson.html',
})
export class ProjectPersonComponent implements OnInit {
id="";
  constructor(public router: Router,private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    
  }

}