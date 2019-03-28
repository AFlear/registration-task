import {NgModule} from '@angular/core';
import {ModalComponent} from './login-modal/modal.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {RouterModule} from '@angular/router';
import {LoginModule} from '../login/login.module';
import {UserService} from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {AddUserModalComponent} from './add-user-modal/add-user-modal.component';
@NgModule({
  declarations: [
    ModalComponent,
    SpinnerComponent,
    AddUserModalComponent
  ],
  imports: [
    RouterModule,
    LoginModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
  ],
  providers: [UserService],
  exports: [
    ModalComponent,
    SpinnerComponent,
    ReactiveFormsModule,
    AngularSvgIconModule,
  ]
})
export class SharedModule {
}


