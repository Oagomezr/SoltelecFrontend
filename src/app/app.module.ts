import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RevisionesComponent } from './components/revisiones/revisiones.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PasswordFieldComponent } from './components/fields-components/password-field/password-field.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    
  ],
  imports: [
    HttpClientModule,
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    PasswordFieldComponent,
    BrowserAnimationsModule,
    LoginComponent,
    RevisionesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
