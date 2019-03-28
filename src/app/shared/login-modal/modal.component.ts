import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() newUser = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal) {

  }

  ngOnInit() {

  }

  close(event) {
    event ? this.modalService.dismissAll(): '';
    this.newUser.emit(true);
  }
}
