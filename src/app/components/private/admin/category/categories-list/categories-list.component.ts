import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
categorieslist:any[]=[]
  constructor(private fb: FormBuilder, 
    private categorySerivce:CategoryService,
    private router:Router) { }

  ngOnInit(): void {

    this.categorySerivce.getAllCaterories().subscribe(
      result=>{
        this.categorieslist = result
      },
      error=>{
        console.log(error);
      }
    )
  }
  delete(category:any) {
    let index = this.categorieslist.indexOf(category);
    this.categorieslist.splice(index, 1);

    this.categorySerivce.deleteCate(category.id).subscribe(
      res=>{
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    )
  }







}
