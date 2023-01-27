import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit{
  
  customer: Customer = new Customer();
  errorMessage: string | undefined;
  isLoading = false;
  
 constructor(private router: Router, private customerService: CustomerService) {} 
    
  ngOnInit(): void {
  }
  saveCustomer(){
    this.customerService.createCustomer(this.customer).subscribe( (data: any) => {
     console.log(data);
      this.goToCustomerList();
    },
      (error: any) => {
        console.log(error);
        this.errorMessage = "An error occurred while creating the customer.";
        this.isLoading = false;
      });
  }

  goToCustomerList(){
    this.router.navigate(['/customers']);
    
  }
  onSubmit(){
    if(this.customer.name && this.customer.emailId && this.customer.address && this.customer.mobile && this.customer.checkIn && this.customer.checkOut){
      this.isLoading = true;
      console.log(this.customer);
      this.saveCustomer();
      this.customer = new Customer();
        }else{
      this.errorMessage = "Please fill the required fields";
    }
  }
}
