import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {LoginData} from '../interfaces/interfaces';
import {UserToken} from '../interfaces/interfaces';
import {DataService} from '../services/data.service';


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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  submit() {
    const formData = this.form.value as LoginData;
    this.form.reset();
    this.dataService.userLogin(formData)
      .subscribe((token: UserToken) => {
      localStorage.setItem('user-token', JSON.stringify(token));
    });
  }
}
