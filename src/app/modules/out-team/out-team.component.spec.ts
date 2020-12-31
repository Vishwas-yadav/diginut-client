import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutTeamComponent } from './out-team.component';

describe('OutTeamComponent', () => {
  let component: OutTeamComponent;
  let fixture: ComponentFixture<OutTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
