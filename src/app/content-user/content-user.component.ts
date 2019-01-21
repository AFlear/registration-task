import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-user',
  templateUrl: './content-user.component.html',
  styleUrls: ['./content-user.component.scss']
})
export class ContentUserComponent implements OnInit {
  public testUsers = [];
  public content: any[] =  new Array();
  public counter: number;

  constructor() {
    this.counter = 0;
    this.getData();
  }

  ngOnInit() {
    this.testUsers = [{
      name:'test',
      role:'developer',
      email:'test@gmail.com',
      phone:'+380661668002'
    },{
      name:'test2',
      role:'developer',
      email:'test@gmail.com',
      phone:'+380661668002'
    },{
      name:'test3',
      role:'developer',
      email:'test@gmail.com',
      phone:'+380661668002'
    },{
      name:'test4',
      role:'developer',
      email:'test@gmail.com',
      phone:'+380661668002'
    },{
      name:'test5',
      role:'developer',
      email:'test@gmail.com',
      phone:'+380661668002'
    },{
      name:'test2',
      role:'developer',
      email:'test@gmail.com',
      phone:'+380661668002'
    },{
      name:'test3',
      role:'developer',
      email:'test@gmail.com',
      phone:'+380661668002'
    },{
      name:'test4',
      role:'developer',
      email:'test@gmail.com',
      phone:'+380661668002'
    },{
      name:'test6',
      role:'developer',
      email:'test@gmail.com',
      phone:'+380661668002'
    }];
  }
  displaydata(data) {this.testUsers = data;}
  getData(){
    console.log(this.counter + 'dat size' + this.testUsers.length)
    for(let i = this.counter + 1; i < this.testUsers.length; i++) {
      this.content.push(this.testUsers[i]);
      // if( i%15 == 0 ) break;
    }
    this.counter += 6;
  }

}
