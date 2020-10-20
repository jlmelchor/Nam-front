import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from './login.service';
import {GenericModalComponent} from '../shared/modals/generic-modal/generic-modal.component';
import swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: any;
  private invalidUser = false;
  formData: any = new FormData();
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    // public dialog: MatDialog,
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
          this.router.navigate( ['/recipes'] );
        } else {
          // Si el usuario no existe, borramos los datos del formulario y mostramos mensaje al usuario
          this.form.reset();
          // this.openDialog();
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario y/o contraseña incorrectos',
            // footer: '<p>¿No tienes cuenta? Regístrate <a class = "link" (click)="goRegistrationPage()"> aquí</a> </p>'
          });
        }
      }
    );
  }

  openDialog(): void {
    /*this.dialog.open(GenericModalComponent, {
      height: '400px',
      width: '600px',
      data: {msg: 'Usuario y/o contraseña incorrectos'}
    });*/
  }
}