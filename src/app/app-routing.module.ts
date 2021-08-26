import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './components/private/admin/category/category-add/category-add.component';
import { CategoriesListComponent } from './components/private/admin/category/categories-list/categories-list.component';
import { CategoryUpdateComponent } from './components/private/admin/category/category-update/category-update.component';
import { ClientsManagementComponent } from './components/private/admin/clients-management/clients-management.component';
import { OrdersDetailsComponent } from './components/private/admin/orders/orders-details/orders-details.component';
import { OrdersManagementComponent } from './components/private/admin/orders/orders-management/orders-management.component';
import { ProductAddComponent } from './components/private/admin/product/product-add/product-add.component';
import { ProductUpadateComponent } from './components/private/admin/product/product-upadate/product-upadate.component';
import { ProductsListComponent } from './components/private/admin/product/products-list/products-list.component';
import { MyOrdersDetailsComponent } from './components/private/client/my-orders-details/my-orders-details.component';
import { MyOrdersComponent } from './components/private/client/my-orders/my-orders.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { FooterComponent } from './components/public/shared/footer/footer.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';

const routes: Routes = [


  {

    path: '',
    component: HomeComponent

  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'register',
    component: RegisterComponent

  },
  {
    path: 'navbar',
    component: NavbarComponent

  },

  {
    path: 'footer',
    component: FooterComponent

  },
  {
    path: 'dashboard',
    component: DashboardComponent

  }, {
    path: 'category-list',
    component: CategoriesListComponent

  },{
    path: 'category-add',
    component: CategoryAddComponent

  },
  {
    path: 'category-update',
    component: CategoryUpdateComponent

  },{
    path: 'my-orders',
    component: MyOrdersComponent

  },{
    path: 'product-add',
    component: ProductAddComponent

  },{
    path: 'products-list',
    component: ProductsListComponent

  },{
    path: 'product-update',
    component: ProductUpadateComponent

  },{
    path: 'orders-details',
    component: OrdersDetailsComponent

  },{
    path: 'orders-management',
    component: OrdersManagementComponent

  },{
    path: 'clients-management',
    component: ClientsManagementComponent

  },{
    path: 'my-orders-details',
    component: MyOrdersDetailsComponent

  }


          
    


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
