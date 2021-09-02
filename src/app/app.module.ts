import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { FooterComponent } from './components/public/shared/footer/footer.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { CategoriesListComponent } from './components/private/admin/category/categories-list/categories-list.component';
import { CategoryUpdateComponent } from './components/private/admin/category/category-update/category-update.component';
import { MyOrdersComponent } from './components/private/client/my-orders/my-orders.component';
import { MyOrdersDetailsComponent } from './components/private/client/my-orders-details/my-orders-details.component';
import { ProductAddComponent } from './components/private/admin/product/product-add/product-add.component';
import { ProductsListComponent } from './components/private/admin/product/products-list/products-list.component';
import { ProductUpadateComponent } from './components/private/admin/product/product-upadate/product-upadate.component';
import { OrdersDetailsComponent } from './components/private/admin/orders/orders-details/orders-details.component';
import { OrdersManagementComponent } from './components/private/admin/orders/orders-management/orders-management.component';
import { ClientsManagementComponent } from './components/private/admin/clients-management/clients-management.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CategoryAddComponent } from './components/private/admin/category/category-add/category-add.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    CategoriesListComponent,
    CategoryUpdateComponent,
    MyOrdersComponent,
    MyOrdersDetailsComponent,
    ProductAddComponent,
    ProductsListComponent,
    ProductUpadateComponent,
    OrdersDetailsComponent,
    OrdersManagementComponent,
    ClientsManagementComponent,
    CategoryAddComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,AppRoutingModule, FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
