import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  prodform: FormGroup


  constructor(private fb: FormBuilder) {

    let formControls = {
      nomproduit : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      description: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      price: new FormControl('',[
        Validators.required,
        Validators.pattern("[1-9 .'-]+"),
        Validators.minLength(2)
      ])
    }

    this.prodform = this.fb.group(formControls);


   }
   
  get nomproduit(){
    return this.prodform.get('nomproduit');
  }
  
  get description(){
    return this.prodform.get('description');
  }


  get price(){
    return this.prodform.get('price');
  }





  ngOnInit(): void {
  }
  saveprod(){
    console.log(this.prodform.value);
  }
}
