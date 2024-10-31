import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from 'src/_services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/_auth/login/login.component';
import { WellsComponent } from 'src/component/wells/wells.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WellsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
