import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IframeComponent } from './iframe/iframe.component';
import {RouterModule, Route} from '@angular/router'

const ROUTES: Route[] = [
  {path: '', redirectTo:'welcome', pathMatch: 'full'}, 
  {path: 'welcome',component: HelloComponent},
  {path: 'classic', children: [
    {path: '**', component: IframeComponent}
  ]}
]


@NgModule({
  imports:      [
   BrowserModule,
   RouterModule.forRoot(ROUTES),
   FormsModule ],
  declarations: [ AppComponent, HelloComponent, IframeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
