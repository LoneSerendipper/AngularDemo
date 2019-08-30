import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ShowMobile/Home';
import { ListComponent } from './ShowTable/list';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Main/HomePage';
import { RoutertHomeComponent } from './router/routerthome';
import { ProjectHomeComponent } from './router/projecthome';
import { ProjectDetailsComponent } from './router/projectdetails';
import { ProjectDescriptionComponent } from './router/ProjectDescription';
import { ProjectDetailsResolve } from './router/projectdetails.resolve';
import { Login } from './router/login';
import { Goaway } from './router/goaway';
import { ChatComponent } from './router/chat';


const routes: Routes = [
  { path: '',redirectTo: '/wait', pathMatch: 'full' },
  { path: 'wait',component: AppComponent },
  { path: 'main',component: HomePageComponent },
  { path: 'home',component: HomeComponent },
  { path: 'list',component: ListComponent },
  { path: 'router',component: RoutertHomeComponent ,children:[
    //  {path: '', component: ProjectHomeComponent},
    {path: 'projecthome', component: ProjectHomeComponent},
    {path: 'projectdetails/:id', component: ProjectDetailsComponent,

       canActivate: [Login],//进入路由守卫
       canDeactivate: [Goaway],//离开路由守卫
    
      resolve: {//在进入主路由前，去此接口路由取值
      product: ProjectDetailsResolve
      }

    },    
    { path: 'chat',component: ChatComponent , outlet: 'aux'},
  ]},
  //{path: '**', component: HomeComponent}// 通配符的路由放置最后，最后找不到就会执行
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProjectDetailsResolve,Login,Goaway]
})
export class AppRoutingModule { }
