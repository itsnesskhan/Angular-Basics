import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public dataSubject = new Subject<object>();
  constructor() { }

  sendDataToParent(data: object) {
    this.dataSubject.next(data);
  }
}
