import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'hell-world';
  sendTochildData = ['The Dark Knight','Inception','Tenet','The Pianist'];
  public childData:any;
  public wrestlersList:any;

  constructor(private router:Router,
              private sharedService:SharedService
    ){}

  navigateToChild() {
      const dataToPass = this.sendTochildData;
      this.router.navigate(['/component-interaction', { data: dataToPass }]);
    }

  ngOnInit(): void {
    console.log('oninit in app component')
    // top series receiving from parent
    this.sharedService.dataSubject.asObservable().subscribe((data)=>{
      this.childData = data;
    })
  }

  ngOnDestroy(): void {
    console.log('ondestroy in app component');
  }
}
