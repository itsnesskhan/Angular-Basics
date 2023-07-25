import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
 
// Create an Observable that emits numbers from 1 to 5
  value:any;
  error:any;
  isComplete:boolean = false;
 myObservable = new Observable((observer) => {
  let count = 1;
  const maxCount = 5;

  const intervalId = setInterval(() => {
    observer.next(count);

    if(count==6){
      observer.error('number greater than 4')
    }

    if (count === maxCount) {
      observer.complete();
      clearInterval(intervalId);
    }

    count++;
  }, 1000);
});

ngOnInit(): void {
  
// Subscribe to the Observable
this.myObservable.subscribe(
  (value) => {
    this.value = value;
  },
  (error) => {
    this.error = error;
  },
  () => {
    this.isComplete = true;
  }
);
}

}


