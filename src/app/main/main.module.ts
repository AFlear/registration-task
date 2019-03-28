import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginModule} from '../login/login.module';
import {HeaderComponent} from '../header/header.component';
import {ContentSlideComponent} from '../content-slide/content-slide.component';
import {ContentInfoComponent} from '../content-info/content-info.component';
import {ContentTextComponent} from '../content-text/content-text.component';
import {ContentUserComponent} from '../content-user/content-user.component';
import {FooterComponent} from '../footer/footer.component';
import {ContentRegisterComponent} from '../content-register/content-register.component';
import {AdminComponent} from '../admin/admin.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ContentSlideComponent,
    ContentInfoComponent,
    ContentTextComponent,
    ContentUserComponent,
    FooterComponent,
    ContentRegisterComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SharedModule,
    LoginModule
  ],
  providers: [],
  exports: [
    MainComponent
  ]
})
export class MainModule {
}


