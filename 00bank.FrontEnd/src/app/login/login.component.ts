import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { LoginAuthService } from '../services/login-auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
//TODO CORRIGIR VALIDAÇÃO SENHA REGEX

  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,16}$/;
  matcher = new MyErrorStateMatcher();




  myForm: FormGroup
  emailFormControl: FormControl
  senhaFormControl: FormControl
  authService: LoginAuthService;

ngOnInit() {
  this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  this.senhaFormControl = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordPattern)]);

    this.myForm = new FormGroup({
     email: this.emailFormControl,
     senha: this.senhaFormControl
  });
}
constructor(private http: HttpClient, authService: LoginAuthService) {}
fazerLogin() {

    // this.http.post('http://localhost:8080/login', this.myForm).subscribe(response => {
    //   const token = response['token'];
    //   localStorage.setItem('authToken', token);
    //   console.log("Valor no localstorage:" + localStorage);
    // })
    if (this.myForm.valid) {
      const { email, senha } = this.myForm.value;
      this.authService.login(email, senha)
        .subscribe(
          response => {
            // Lidar com a resposta da API
          },
          error => {
            console.log("Erro não identificado ao conectar-se ao servidor.");
          }
        );

    console.log(this.myForm);

  }

}
}
