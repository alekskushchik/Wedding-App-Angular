import {Component, Input} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-body">
      <!--      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">&#x2715;</button>-->
      <register-form></register-form>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}

@Component({
  selector: 'ngbd-modal-component',
  template:
      `
    <button
      class="btn btn-outline-dark"
      style="padding: 5px 36px"
      (click)="open()">
      Login
    </button>
  `,
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
  }
}
