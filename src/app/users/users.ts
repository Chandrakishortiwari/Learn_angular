import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {

  users=[
    {id:'1', name:"ram", age:"20"},
     {id:'2', name:"raj", age:"30"},
      {id:'3', name:"rahul", age:"47"}, 
      {id:'4', name:"raman", age:"55"}
  ]

}
