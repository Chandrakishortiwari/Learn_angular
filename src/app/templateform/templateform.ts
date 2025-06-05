import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  imports: [FormsModule],
  templateUrl: './templateform.html',
  styleUrl: './templateform.css'
})
export class Templateform {

  userDeatiles:any;

  addDeatiles(val:NgForm){
    console.log(val);
    this.userDeatiles=val;
    
  }

}
