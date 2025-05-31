import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-profile',
  imports: [],
  templateUrl: './users-profile.html',
  styleUrl: './users-profile.css'
})
export class UsersProfile {

  
  constructor(private route:ActivatedRoute){};
  ngOnInit():void{
    // this.username = this.route.snapshot.paramMap.get('name');
    // console.log(this.username);


     this.route.params.subscribe(param=>{
     console.log(param);
     
    

  })

}

}