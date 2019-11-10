import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidedDeliveryComponent } from './provided-delivery.component';

describe('ProvidedDeliveryComponent', () => {
  let component: ProvidedDeliveryComponent;
  let fixture: ComponentFixture<ProvidedDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidedDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidedDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
