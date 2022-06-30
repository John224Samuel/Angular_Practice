import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOneComponent } from './test-one/test-one.component';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TestOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  /*http client  */
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
