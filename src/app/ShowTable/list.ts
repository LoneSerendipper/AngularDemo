import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list.html',
})
export class ListComponent implements OnInit {

  constructor(public Route:Router) { }

  ngOnInit() {
  }

}