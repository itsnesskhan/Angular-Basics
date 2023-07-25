import { Component } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  public greet ='';
  public onClickFun(value:string){
      this.greet ="Welcome "+value;
      alert(this.greet);
  }
}
