import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpService} from '../../shared/http.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-ngbd-modal-content',
  template: `
    <div class="modal-body">
      <app-register-form></app-register-form>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService) {
  }
}

@Component({
  selector: 'app-ngbd-modal-component',
  template: `
    <button *ngIf="token == null"
            class="btn btn-outline-dark"
            style="padding: 5px 36px"
            (click)="open()">Sign In
    </button>
    <button *ngIf="token != null"
            class="btn btn-outline-dark"
            style="padding: 5px 36px"
            (click)="logout()">Logout
    </button>`,
})

export class NgbdModalComponent implements OnInit {

  token: any;

  constructor(private modalService: NgbModal, private dataService: HttpService) {
  }


  ngOnInit() {
    this.dataService.token.subscribe(token => this.token = token);
  }

  open() {
    if (this.token != null) {
    } else if (this.token == null) {
      this.modalService.open(NgbdModalContent);
    }
  }

  logout() {
    this.dataService.updateToken(null);
    this.dataService.showInfo();
    localStorage.clear();
  }
}
