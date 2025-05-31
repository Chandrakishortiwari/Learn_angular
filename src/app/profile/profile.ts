import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

   username :string| null ="";

  constructor(private route:ActivatedRoute){};
  ngOnInit():void{
    // this.username = this.route.snapshot.paramMap.get('name');
    // console.log(this.username);


     this.route.queryParams.subscribe(params=>{
     this.username =params['name']
     })
   
    

  }

}
