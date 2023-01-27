import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {path:'customers',component:CustomerListComponent},
 { path:'create-customer',component:CreateCustomerComponent},
 {path:'',redirectTo:'customers',pathMatch:'full'},
 { path:'customerlist',component:CustomerListComponent},

{ path: 'update.customer/:id',component: UpdateCustomerComponent},
{ path: 'customer.details/:id',component: CustomerDetailsComponent},
{ path:'gallery',component:GalleryComponent},
{ path:'aboutus',component:AboutusComponent},
{ path:'contactus',component:ContactusComponent},
{ path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'customerlist', component: CustomerListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
