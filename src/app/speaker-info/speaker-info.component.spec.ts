import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerInfoComponent } from './speaker-info.component';

describe('SpeakerInfoComponent', () => {
  let component: SpeakerInfoComponent;
  let fixture: ComponentFixture<SpeakerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakerInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeakerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
