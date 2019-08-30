import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import {HomeComponent} from './ShowMobile/Home';
import {ListComponent} from './ShowTable/list';
import { HomePageComponent } from './Main/HomePage';
import { RoutertHomeComponent } from './router/routerthome';
import { ProjectHomeComponent } from './router/projecthome';
import { ProjectDetailsComponent } from './router/projectdetails';
import { ProjectDescriptionComponent } from './router/ProjectDescription';
import { ProjectPersonComponent } from './router/ProjectPerson';
import { ChatComponent } from './router/chat';

@NgModule({
  declarations: [
    AppComponent, HomeComponent,ListComponent,HomePageComponent,RoutertHomeComponent,ProjectHomeComponent,ProjectDetailsComponent
    ,ProjectDescriptionComponent,ProjectPersonComponent,ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
