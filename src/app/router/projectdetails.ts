import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './projectdetails.html',
})
export class ProjectDetailsComponent implements OnInit {
id="";
productId="";
productName="";
  constructor(public router: Router,private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.routerInfo.snapshot.params.id;

    this.routerInfo.data.subscribe((data: {product: Project}) => {
      this.productId = data.product.ids;
      this.productName = data.product.name;
    });

  }

}

export class Project{

  constructor(public ids: string, public name: string){
  
  
  }
}