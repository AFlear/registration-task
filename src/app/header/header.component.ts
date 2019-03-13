import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../shared/modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  public modalRef: NgbModalRef;
  public login: string;

  ngOnInit() {
    this.login = this.checkAutorization();
  }

  private checkAutorization() {
    return localStorage.getItem('login') ? localStorage.getItem('login') : '';
  }

  public openModal() {
    if (!this.login) {
      const modal = this.modalService.open(ModalComponent);
      modal.result.then(() => {
        this.login = this.checkAutorization();
      }, () => {
        this.login = this.checkAutorization();
      });
    }

  }

  public logOut() {
    localStorage.removeItem('login');
    this.login = this.checkAutorization();

  }
}
