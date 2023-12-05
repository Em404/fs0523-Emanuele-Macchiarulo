import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  @ViewChild('f',{static:true}) form!:NgForm;

  emailRegEx = "[a-z]{2,15}@[a-z]{2,15}.[a-z]{2,7}"

  isEmail(input:NgModel){
    if(input.errors){
      return input?.errors['pattern'] && input.dirty
    }
    return false;
  }

  isEmpty(input:NgModel){
    return !input.value && input.dirty
  }

  submit(form:NgForm){
    console.log(this.form)
    console.log(form)
    console.log(form.value)
    form.reset()
    alert("Form Inviato")
  }
}
