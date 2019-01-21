import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ContentSlideComponent } from './content-slide/content-slide.component';
import { ContentInfoComponent } from './content-info/content-info.component';
import { ContentTextComponent } from './content-text/content-text.component';
import { ContentUserComponent } from './content-user/content-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentSlideComponent,
    ContentInfoComponent,
    ContentTextComponent,
    ContentUserComponent
  ],
  imports: [
    HttpClientModule,
    AngularSvgIconModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


