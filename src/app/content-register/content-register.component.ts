import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {UserService} from '../shared/services/user.service';
@Component({
  selector: 'app-content-register',
  templateUrl: './content-register.component.html',
  styleUrls: ['./content-register.component.scss']
})
export class ContentRegisterComponent implements OnInit {
  public registerForm: any;
  constructor(private fb: FormBuilder, private userService: UserService) {

  }



  ngOnInit() {
    this.registerForm = this.fb.group({
      first_name: [''],
      last_name:[''],
      email:['']
    })
  }

  public submitForm(){
    const data = {
      'first_name':this.registerForm.controls['first_name'].value,
      'last_name':this.registerForm.controls['last_name'].value,
      'email':this.registerForm.controls['email'].value
    };
    this.userService.addUser(data).subscribe((res)=>{
      console.log(res);
    })
  }

}


