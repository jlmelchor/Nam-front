import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData: any = new FormData();
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  goRegistrationPage() {
    this.router.navigate(['/registration'] );
  }

  rememberPassword() {
   // TODO
  }

  submit() {
    this.formData.append('email', this.form.value.email);
    this.formData.append('password', this.form.value.password);
    this.loginService.logIn(this.formData).subscribe(
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
            title: 'Hola ' + user.name
          });
          // Guardamos los datos del usuario en la sesión
          sessionStorage.setItem('userId', JSON.stringify(user.userId));
          this.loginService.user.emit(sessionStorage.setItem('userId', JSON.stringify(user.userId)));
          this.loginService.reload.emit(true);
          this.router.navigate( ['/recipes'] );
        } else {
          // Si el usuario no existe, borramos los datos del formulario y mostramos mensaje al usuario
          this.formData = new FormData();
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario y/o contraseña incorrectos',
          });
        }
      }
    );
  }
}
