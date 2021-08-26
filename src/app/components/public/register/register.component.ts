import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform:FormGroup

  constructor(private fb:FormBuilder) {
  let formcontrols={
firstname:new FormControl('',[

  Validators.required,
  Validators.pattern("[a-z .'-]+"),
  Validators.minLength(2)



]),
lastname:new FormControl('',[

  Validators.required,
  Validators.pattern("[a-z .'-]+"),
  Validators.minLength(2)



]),
email: new FormControl('', [
  Validators.required,
  Validators.email

]),
password: new FormControl('', [

  Validators.required,
  Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
  Validators.minLength(6)

])
, repassword: new FormControl('',[
  Validators.required,
])



  }

  this.registerform=this.fb.group(formcontrols);


}

get firstname(){
  return this.registerform.get('firstname');
}
get lastname(){
  return this.registerform.get('lastname');
}
get email(){
  return this.registerform.get('email');
}
get password(){

return this.registerform.get('password')


}

get repassword(){

return this.registerform.get('repassword')


}


  ngOnInit(): void {
  }
  register(){
    console.log(this.registerform.value);
  }

}
