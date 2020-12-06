import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

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
    private registrationService: RegistrationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    this.formData.append('name', this.form.value.name);
    this.formData.append('surname', this.form.value.surname);
    this.formData.append('email', this.form.value.email);
    this.formData.append('password', this.form.value.password);
    this.registrationService.addUser(this.formData).subscribe(
      user => {
        if (user != null) {
          const Toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', swal.stopTimer);
              toast.addEventListener('mouseleave', swal.resumeTimer);
            }
          });

          Toast.fire({
            icon: 'success',
            title: 'Registro realizado correctamente'
          });
          // Redireccionamos al usuario a la pantalla de Log-in
          this.router.navigate( ['/login'] );
        } else {
          // Si el registro no se ha podido completar, mostramos mensaje al usuario
          this.form.reset();
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha podido completar el registro',
          });
        }
      }
    );
  }
}
