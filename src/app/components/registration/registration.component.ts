import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formData: any = new FormData();
  form = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private registrationService: RegistrationService
  ) { }

  ngOnInit() {
  }

  submit() {
    this.formData.append('name', this.form.value.name);
    this.formData.append('surname', this.form.value.surname);
    this.formData.append('email', this.form.value.email);
    this.formData.append('password', this.form.value.password);
    this.registrationService.addUser(this.formData);
  }

}
