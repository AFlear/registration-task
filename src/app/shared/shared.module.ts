import {NgModule} from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {SpinnerComponent} from './spinner/spinner.component';

@NgModule({
  declarations: [
    ModalComponent,
    SpinnerComponent
  ],
  imports: [],
  providers: [],
  exports: [
    ModalComponent,
    SpinnerComponent
  ]
})
export class SharedModule {
}


