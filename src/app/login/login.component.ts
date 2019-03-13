import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, FormGroupName, FormControlName, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) {
  }
  @Output() closeModal = new EventEmitter<boolean>();
  public loginForm: FormGroup;
  public isNotLogined: boolean;

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        login: [''],
        password: ['']
      }
    )
    this.isNotLogined = !!localStorage.getItem('login');
  }

  loginUser(event) {
    event.preventDefault();
    localStorage.setItem('login', this.loginForm.get('login').value);
    this.closeModal.emit(true)
  }

}
