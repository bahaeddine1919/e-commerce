import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  myForm: FormGroup


  constructor(private fb: FormBuilder) {

    let formControls = {
      firstname : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ])
    }

    this.myForm = this.fb.group(formControls);


   }
   
  get firstname(){
    return this.myForm.get('firstname');
  }

  ngOnInit(): void {
  }
  saveUser(){
    console.log(this.myForm.value);
  }

}
