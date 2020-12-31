import { Component, OnInit, HostListener, ElementRef, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private eRef: ElementRef) { }
  @Output() someEvent = new EventEmitter();
  ngOnInit() {
  }
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {

    } else {
      if (!event.target.classList.contains('fa-bars')) {
        this.someEvent.emit('data');
      }

    }
  }

}
