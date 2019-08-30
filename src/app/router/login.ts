import {CanActivate} from "@angular/router";

export class Login implements CanActivate{
  canActivate() {
    let login: boolean = Math.random() < 0.5 ;
    if (!login) {
      console.log('未登录');
      alert('未登录');
    }
    return login;
  }

}
