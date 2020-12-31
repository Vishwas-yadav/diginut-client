import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  fixedHeader: boolean = false;
  public isVisible: boolean;
  activePanel: string = 'right';
  constructor() {
    this.isVisible = false;
  }

  ngOnInit() {

  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if (window.scrollY >= 7) {
      this.fixedHeader = true;
    } else {
      this.fixedHeader = false;
    }

  }
  public onToggle(): void {
    this.isVisible = !this.isVisible;
    this.activePanel = this.isVisible ? 'left' : 'right';
    // this.activePanel = 'right';
  }
  eventReceived($event) {
    if (this.isVisible) {
      this.onToggle();
    }
  }

}
