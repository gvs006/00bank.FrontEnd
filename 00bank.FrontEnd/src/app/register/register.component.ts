import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../login/login.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  //TODO CORRIGIR VALIDAÇÃO SENHA REGEX

  passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,16}$/;
  matcher = new MyErrorStateMatcher();

  myForm: FormGroup;
  emailFormControl: FormControl;
  senhaFormControl: FormControl;

  ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.senhaFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(this.passwordPattern),
    ]);

    this.myForm = new FormGroup({
      email: this.emailFormControl,
      senha: this.senhaFormControl,
    });
  }
  constructor(private http: HttpClient) {}

  cadastrar() {
    console.log("Cadastrado.");

  }
  // cadastrar() {
  //      if (this.myForm.valid) {
  //         const { email, senha } = this.myForm.value;
  //         this.login(email, senha)
  //         .subscribe(
  //              response => {
  //              // Lidar com a resposta da API
  //           },
  //             error => {
  //            console.log("Erro não identificado ao conectar-se ao servidor.");
  //            }
  //           );

  //       console.log(this.myForm);

  //     }
  //   }
}
