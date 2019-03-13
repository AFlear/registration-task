import {NgModule} from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {RouterModule} from '@angular/router';
import {LoginModule} from '../login/login.module';
import {UserService} from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ModalComponent,
    SpinnerComponent,
  ],
  imports: [
    RouterModule,
    LoginModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  exports: [
    ModalComponent,
    SpinnerComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}


