import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup
  constructor(private fb: FormBuilder) {

    let formcontrols = {
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ]),
      password: new FormControl('', [

        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
        Validators.minLength(6)

      ])

    }
    this.loginform = this.fb.group(formcontrols);

  }
  get email(){
    return this.loginform.get('email');
  }
  get password(){
  
  return this.loginform.get('password')
  
  
  }

  ngOnInit(): void {
  }
  
  
  login(){
    console.log(this.loginform.value);
  }


}
