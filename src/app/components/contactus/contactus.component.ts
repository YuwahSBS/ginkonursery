import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AbstractControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { environment } from 'environments/environment';
import { configuration } from '../configuration';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Validation from '../utility';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  loading = false;
  buttionText = "Submit";
  name;
  email;
  form: FormGroup;
submitted: boolean = false;
isVisible: boolean = false; 

 

  get f() { return this.form.controls; }

  constructor(
    private http: HttpService, 
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private productService: ProductService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      message:['', [Validators.required]]

  })
}

showAlert() : void {
  if (this.isVisible) { 
    return;
  } 
  this.isVisible = true;
  setTimeout(()=> this.isVisible = false,2500)
}

  // constructor(
  //   public http : HttpService
  // ) { 
  //   this.form = this.formBuilder.group({
  //     email: ['', [Validators.required]],
  //     name: ['', [Validators.required]]
  //   })
  // }

  ngOnInit(): void {
    //this.sendMessage()
  }

  

  // sendMessage(formData: NgForm){
  //   this.loading = true;
  //   console.log(formData);
    
  //   this.http.sendMessage(formData).subscribe(
  //   data => console.log(data)
  //   
  
  sendMessage() {
    
    this.submitted = true;
    this.loading = true;

    if (this.form.invalid) {
      return;
    }

    let user = {
      name: this.f['name'].value,
      email: this.f['email'].value,
      phone: this.f['phone'].value,
      message: this.f['message'].value
    }
    
    this.http.sendEmail("https://www.ginkonursery.com/phpmailer/index.php", user).subscribe(
      
      data => {
        let res:any = data; 
        console.log(
          `send`
        );
        
        
      },
      
      err => {
        this.loading = true;
        this.toastr.success('Thank You!', 'We will contact to you soon!');
        console.log(err);
        
        this.form.reset()
        this.submitted = false
      },() => {
        this.loading = false;
      }
      
    );
    
    
  }

  


}


