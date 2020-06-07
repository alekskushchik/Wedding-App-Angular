import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {LoginData} from '../../../shared/interfaces';
import {UserToken} from '../../../shared/interfaces';
import {HttpService} from '../../../shared/http.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})

export class RegisterFormComponent implements OnInit {
  public form: FormGroup;

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  constructor(private dataService: HttpService, public activeModal: NgbActiveModal, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email, Validators.required
      ]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(8)
      ])
    });
    console.log(this.password);
  }

  submit() {
    const formData = this.form.value as LoginData;
    console.log(formData);
    this.form.reset();
    this.dataService.userLogin(formData)
      .subscribe((token: UserToken) => {
        this.dataService.updateToken(token);
        this.activeModal.close();
        this.showSuccess();
      });
  }

  showSuccess() {
    this.toastr.success('', 'You\'ve just authorized to the app in edit mode. Have fun!', {
      easing: 'ease-in',
      easeTime: 500,
      timeOut: 2000
    });
  }
}
