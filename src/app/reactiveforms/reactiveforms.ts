import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactiveforms',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactiveforms.html',
  styleUrl: './reactiveforms.css'
})
export class Reactiveforms {

  userdetils= new FormGroup({
    name: new FormControl('',[Validators.required, Validators.pattern("rejes vailidation")]),
    email:new FormControl('',[Validators.required]),
  });

   
  onSubmit(){
    console.log(this.userdetils.value);
    
  };

  setValue(){
    this.userdetils.setValue({
      name:"jay",
      email:"jay@gamil.com"
    })
  };
  
  get name(){
    return this.userdetils.get('name')
  }

   get email(){
    return this.userdetils.get('email')
  }

}
