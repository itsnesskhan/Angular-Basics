import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

type user = {
  id: number,
  firstName: string,
  lastName: string,
  age: number
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})



export class UserDetailsComponent implements OnInit{
  
  constructor(private router:ActivatedRoute){}
  

  
  public user:any;
  public userid =  Number(this.router.snapshot.params['id']);
  public allowEdit = this.router.snapshot.queryParamMap.get('allowEdit')
  //if want to react to change in  queryparam on the samePage then
  public allowEdit2 = this.router.queryParams.subscribe((param)=>{
    console.log(param)
  })
  
  
  nasser:user ={id:1,firstName:'Nasser',lastName:'Khan',age:24}
  ayush:user ={id:2,firstName:'Aayush',lastName:'Kushwah',age:24}
  mohit:user ={id:3,firstName:'Mohit',lastName:'Malve',age:24}
  users:user[] = [this.nasser, this.ayush, this.mohit];
  
  public getUserById(id:number){
    console.log('allowedit',this.allowEdit)
    return this.users.find(ele=> ele.id === this.userid);
  }

  ngOnInit(): void {
    this.user = this.getUserById(this.userid);
  }
  
}
