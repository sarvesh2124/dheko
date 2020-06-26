import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantBoxComponent } from './participant-box.component';

describe('ParticipantBoxComponent', () => {
  let component: ParticipantBoxComponent;
  let fixture: ComponentFixture<ParticipantBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
