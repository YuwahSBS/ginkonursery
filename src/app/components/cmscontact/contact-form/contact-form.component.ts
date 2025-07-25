import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CmspageService } from 'app/components/contactform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  model = new Contact();
  submitted  = false;
  error  = {};

  constructor(
    private router : Router,
    private cmspageServie : CmspageService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    return this.cmspageServie.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  }

  gotoHome(){
    this.router.navigate([''])
  }

}
