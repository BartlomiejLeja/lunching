import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLunchSpotDialogComponent } from './add-lunch-spot-dialog.component';

describe('AddLunchSpotDialogComponent', () => {
  let component: AddLunchSpotDialogComponent;
  let fixture: ComponentFixture<AddLunchSpotDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLunchSpotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLunchSpotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
