import { Component } from '@angular/core';

@Component({
  selector: 'style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {
  public hasError = true

  public multiStyleObject = {
    fontStyle: 'italic',
    backgroundColor: 'orange',
    color: 'green',
    fontWeight: 'bolder'
  }
}
