import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})

export class CategoryUpdateComponent implements OnInit {
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
