import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-content-user',
  templateUrl: './content-user.component.html',
  styleUrls: ['./content-user.component.scss']
})
export class ContentUserComponent implements OnInit {
  public content: any = [];
  public counter: number;
  public isHidden: boolean = false;
  public hiddenSpinner: boolean = true;
  private page = 1;

  constructor(private userService: UserService) {
    this.counter = 0;
  }

  ngOnInit() {
    this.getData();
  }

  public getData() {
    this.userService.getUsers(this.page).subscribe((res) => {
      // @ts-ignore
      this.content.push(...res);
      this.page += 1;
    });
    if (this.page >= 3) {
      this.isHidden = true;
      this.hiddenSpinner = false;
    }
  }

}
