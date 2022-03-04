import { Component,  AfterViewInit, ChangeDetectorRef, ElementRef, Input } from '@angular/core';
import { SetState } from 'src/app/Services/state.decorator.service';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css']
})
export class TogglerComponent implements AfterViewInit {


  show!: boolean;

  @Input() selector: any;
  target!: HTMLElement;

  constructor(private cd: ChangeDetectorRef, private el: ElementRef) { }
  ngAfterViewInit(){
    this.el.nativeElement.style.visibility = 'visible';
    this.target = document.querySelector(this.selector) as any;
  }

  ngOnInit(): void {
  }
  @SetState()
  toggle(val?: boolean) {
    this.show = val || !this.show;
    if (this.target) {
      const state = this.show ? 'visible' : 'hidden';
      this.target.style.visibility = state;
      if (state === 'visible') {
        this.target.classList.add('show');
      } else {
        this.target.classList.remove('show');
      }
    }
  }

}
