import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
// import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "../user";
import { PostDataService } from "../services/post-data.service";

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  providers: [PostDataService]
})
export class RegisterFormComponent implements OnInit {

  user: User = new User();
  form;

  constructor(public activeModal: NgbActiveModal, public postDataService: PostDataService) {}

  ngOnInit(): void {
  }

  receivedUser: User;
  done: boolean = false;

  submit(f) {

    this.activeModal.close();
    this.postDataService.postData(f)
      .subscribe(
        (data: User) => {
          this.receivedUser = data;
          this.done = true;
        },
        error => console.log(error)
      );
  }

}
