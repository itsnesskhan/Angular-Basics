import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit, OnDestroy {
  public inputId:number = 27;
  public enableInput = false;

  ngOnInit(): void {
    console.log('oninit in property-bind component')
  }

  ngOnDestroy(): void {
    console.log('ondestroy in property-bind component');
  }
}
