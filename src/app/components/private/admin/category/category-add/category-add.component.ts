import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  myForm: FormGroup


  constructor(private fb: FormBuilder, 
    private categorySerivce:CategoryService,
    private router:Router) {

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
    let date=this.myForm.value;
    let category=new Category(undefined,date.firstname);

    this.categorySerivce.addCate(category).subscribe(
      res=>{
        
        console.log(res);
        this.router.navigate(['/category-list']);
      },
      err=>{
        console.log(err);
      }
    )

  }
  

}
