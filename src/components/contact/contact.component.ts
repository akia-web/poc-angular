import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private readonly formBuilder: FormBuilder){}
  formGroup: FormGroup = this.formBuilder.group({
    email:['', [Validators.email]],
    password:['',[]]
  })

  submit(){
    
  }
}
