import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddBackgroundColor]'
})
export class AddBackgroundColorDirective implements OnInit {

  
  constructor(private elRef: ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','yellow');
  }

  @HostListener('mouseover') mourseover(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','yellow');
  }

  @HostListener('mouseleave') mourseleave(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','pink');
  }


}
