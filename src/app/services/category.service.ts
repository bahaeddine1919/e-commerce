import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private addCategory = "http://localhost:8080/categories/add";
  private ALLCategory = "http://localhost:8080/categories/all";
  private delateCategory = "http://localhost:8080/categories/delete/";
  constructor(private http: HttpClient) { 


  }
  addCate(category: Category) {
    return this.http.post<any>(this.addCategory, category);
  }

  getAllCaterories() {
    return this.http.get<any>(this.ALLCategory);
  }

  deleteCate(id: String) {
    return this.http.delete<any>(this.delateCategory + id)
  }
}
