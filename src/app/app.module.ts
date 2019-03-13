import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ContentSlideComponent } from './content-slide/content-slide.component';
import { ContentInfoComponent } from './content-info/content-info.component';
import { ContentTextComponent } from './content-text/content-text.component';
import { ContentUserComponent } from './content-user/content-user.component';
import {SharedModule} from './shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { ContentRegisterComponent } from './content-register/content-register.component';
import {ModalComponent} from './shared/modal/modal.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule} from '@angular/router';
import {LoginModule} from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentSlideComponent,
    ContentInfoComponent,
    ContentTextComponent,
    ContentUserComponent,
    FooterComponent,
    ContentRegisterComponent,
    AdminComponent
  ],
  imports: [
    HttpClientModule,
    AngularSvgIconModule,
    BrowserModule,
    SharedModule,
    NgbModule,
    RouterModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ModalComponent]
})
export class AppModule { }


