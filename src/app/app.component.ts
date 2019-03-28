import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'registration-task';
  public registeredUserData: any;

public getData(event){
  this.registeredUserData = event;
}

}
