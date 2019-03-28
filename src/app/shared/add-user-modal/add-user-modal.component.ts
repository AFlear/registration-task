import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModalComponent implements OnInit {
  @Output() newUser = new EventEmitter<boolean>();
  @Input() userData = {};
  constructor(private modalService: NgbModal) {

  }

  ngOnInit() {}
}
