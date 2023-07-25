import { Component } from '@angular/core';

type user = {
  firstName: string,
  lastName: string,
  age: number
}

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})



export class AllUsersComponent {

  
  nasser:user ={firstName:'Nasser',lastName:'Khan',age:24}
  ayush:user ={firstName:'Aayush',lastName:'Kushwah',age:24}
  mohit:user ={firstName:'Mohit',lastName:'Malve',age:24}
  users:user[] = [this.nasser, this.ayush, this.mohit];


  
}
