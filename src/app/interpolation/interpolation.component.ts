import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, count, interval } from 'rxjs';

@Component({
  selector: 'interpolation',
  template: `<h1>Interpolation Component</h1>
  <p>i am test componet, i am writen by {{owner}}</p>
  <p>Concating string owerer {{'Namste '+ owner.toUpperCase()}}
  <p>{{hostUrl}}</p>
  `
  // <p>{{a=2+2}}</p> //assigment not possible in binding
  // <p>{{window.location.href}}</p> //cant access global variables either
  ,
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit, OnDestroy{
  
  public owner = 'Nasser Khan';
  public hostUrl = window.location.href;
  public firstobsSubstribtion:Subscription | undefined;

  ngOnInit(): void {
    console.log('on init called')
      this.firstobsSubstribtion = interval(1000).subscribe(count=>{
      console.log(count);
    })
  }

  ngOnDestroy(): void {
    console.log('on destroy called')
    this.firstobsSubstribtion?.unsubscribe()
  }
}
