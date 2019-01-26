import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-user',
  templateUrl: './content-user.component.html',
  styleUrls: ['./content-user.component.scss']
})
export class ContentUserComponent implements OnInit {
  public testUsers: any;
  public content: any = [];
  public counter: number;
  public isHidden: boolean = false;
  public hiddenSpinner: boolean = true;

  constructor() {
    this.counter = 0;
    this.testUsers = [{
      name: 'test',
      role: 'developer',
      email: 'test@gmail.com',
      phone: '+380661668002'
    }, {
      name: 'test2',
      role: 'developer',
      email: 'test@gmail.com',
      phone: '+380661668002'
    }, {
      name: 'test3',
      role: 'developer',
      email: 'test@gmail.com',
      phone: '+380661668002'
    }, {
      name: 'test4',
      role: 'developer',
      email: 'test@gmail.com',
      phone: '+380661668002'
    }, {
      name: 'test5',
      role: 'developer',
      email: 'test@gmail.com',
      phone: '+380661668002'
    }, {
      name: 'test6',
      role: 'developer',
      email: 'test@gmail.com',
      phone: '+380661668002'
    },
      {
        name: 'test7',
        role: 'developer',
        email: 'test@gmail.com',
        phone: '+380661668002'
      }, {
        name: 'test8',
        role: 'developer',
        email: 'test@gmail.com',
        phone: '+380661668002'
      }, {
        name: 'test9',
        role: 'developer',
        email: 'test@gmail.com',
        phone: '+380661668002'
      }];
    this.getData();
  }

  ngOnInit() {

  }

  public getData() {
    let tmp = this.testUsers.slice(this.counter, this.counter + 6);
    tmp.forEach((user) => {
      this.content.push(user);
    });
    this.counter += 6;
    if(this.content.length >= this.testUsers.length) {
      this.isHidden = true;
      this.hiddenSpinner = false;
    }
  }


}
