import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import {SharedModule} from './shared/shared.module';
import {ModalComponent} from './shared/login-modal/modal.component';
import {RouterModule} from '@angular/router';
import {MainModule} from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MainModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ModalComponent]
})
export class AppModule { }


