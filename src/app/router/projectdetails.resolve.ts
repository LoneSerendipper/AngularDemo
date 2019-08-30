import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Project} from '../router/projectdetails';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
@Injectable()
export class ProjectDetailsResolve implements Resolve<Project> {

  constructor(private  router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> | Promise<Project> | Project {
   let productId: number = route.params.id;
   console.log(productId);
  if (productId == 6) {
      return new Project('111', '张三');
    } else {
    this.router.navigate(['/home']);
  }
  }

}