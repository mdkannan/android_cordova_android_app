import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {WorkorderComponent} from './workorder/workorder.component';
import {LoginService} from '../services/login.service';

const appRoutes: Routes = [
  {path: 'login', component: AppComponent},
  {path: 'workorder', component: WorkorderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WorkorderComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
