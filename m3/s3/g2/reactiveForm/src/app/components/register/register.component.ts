import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  genders = ['Maschio', 'Femmina', 'Altro']; // Opzioni del sesso
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      //il form
      nome: this.fb.control(null, [Validators.required]),
      cognome: this.fb.control(null, [Validators.required]),
      gender: this.fb.control(null, [Validators.required]),
      authData: this.fb.group({
        email: this.fb.control(
          null, //valore
          [Validators.required, Validators.email],
        ),
        username: this.fb.control(null, [Validators.required]),
        password: this.fb.control(null, [Validators.required]),
        confermaPassword: this.fb.control(null, [Validators.required]),
      }),
      bio: this.fb.control(null, [Validators.required])
    });
  }

  isValid(fieldName: string) {
    return this.form.get(fieldName)?.valid;
  }

  isTouched(fieldName: string) {
    return this.form.get(fieldName)?.touched;
  }

  isValidAndTouched(fieldName: string) {
    return this.isValid(fieldName) && this.isTouched(fieldName);
  }

  getErrors(fieldName: string) {
    return this.form.get(fieldName)?.errors;
  }

  getCustomMessage(fieldName: string) {
    return this.form.get(fieldName)?.errors!['message'];
  }

  send() {
    alert("Registrazione effettuata")
    console.log(this.form.value);
  }
}
