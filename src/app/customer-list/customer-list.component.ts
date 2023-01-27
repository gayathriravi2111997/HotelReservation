import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{
  customers: Customer[]=[];
  username!: string;
  password!: string;
  constructor(private customerService: CustomerService,
    private router: Router){ }

    ngOnInit(): void {
      this.getCustomers();

    }
    private getCustomers(){
      this.customerService.getCustomerList().subscribe(data => {
        this.router.navigate(['customer.customerList']);  
        this.customers = data;

      });
    }
    customerDetails(id: number){
      this.router.navigate(['customer.details',id]);

    }
      updateCustomer(id: number){
        this.router.navigate(['update.customer',id]);
      }  
      deleteCustomer(id: number){
        this.customerService.deleteCustomer(id).subscribe( data => {
         console.log(data);
          this.getCustomers();
        })
      }
      validateForm() {
        if (this.username === "Gayathri1997" && this.password === "Gayathri") {
          this.router.navigate(['/customerlist']);
        } else {
          alert("Invalid username or password");
        }
      }
        }