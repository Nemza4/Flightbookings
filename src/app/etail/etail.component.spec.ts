import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtailComponent } from './etail.component';

describe('EtailComponent', () => {
  let component: EtailComponent;
  let fixture: ComponentFixture<EtailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
