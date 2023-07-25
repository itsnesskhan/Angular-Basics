import { Component } from '@angular/core';

@Component({
  selector: 'class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {

  public succlass = "mystyleclass";
  public errorclass = "text-danger"
  public special = "font-italic bg-primary text-success"

  public hasError = true;
  public isSpecial = false

  public multiClassExample = {
    style1:this.hasError,
    style2:!this.isSpecial && this.hasError,
    style3:this.isSpecial
  }
}
