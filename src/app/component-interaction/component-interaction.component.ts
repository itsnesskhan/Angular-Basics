import { Component, Input , Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent {

  // @Input('parentData') public parentData:any;
  @Input('parentData') public moviesList:any;
  public parentData:any;

  // @Input() wrestlersList = ['Roman Reings','Aj Styles','Dolph Zeegler','Edge'];

  receivedDataFromParent:any;

  @Output('childDataSendEvent') childDataSendEvent = new EventEmitter()
  

  constructor(private router: ActivatedRoute,
              private sharedService:SharedService
    ) {}
  
    ngOnInit() {
      //this won't work if u are already on child comp
      // this.parentData = this.router.snapshot.paramMap.get('data');

      this.router.params.subscribe((params:Params) => {
        // Access the route parameters here
        this.parentData = params['data']
      });

      
    }
 

  public topImdbSeries = {'Breaking Bad':9.4,'Game of Thrones':9.3,'True Ditective':9.1,'Ozark':8.9,'Dark':8.8};

  public addSeries(){
    //this trigger the event
    // now parent component catch this event 
    //and receive the data based on it
    console.log('Series added to db');
    this.childDataSendEvent.emit(this.topImdbSeries);


    //this will work for router outlet
    this.sharedService.sendDataToParent(this.topImdbSeries)

  }

  

}
