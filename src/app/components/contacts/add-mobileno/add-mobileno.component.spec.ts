import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMobilenoComponent } from './add-mobileno.component';

describe('AddMobilenoComponent', () => {
  let component: AddMobilenoComponent;
  let fixture: ComponentFixture<AddMobilenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMobilenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMobilenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
