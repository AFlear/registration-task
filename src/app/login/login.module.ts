import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
LoginComponent
  ]
})
export class LoginModule {
}


