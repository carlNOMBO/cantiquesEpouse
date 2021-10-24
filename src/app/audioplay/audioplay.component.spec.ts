import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioplayComponent } from './audioplay.component';

describe('AudioplayComponent', () => {
  let component: AudioplayComponent;
  let fixture: ComponentFixture<AudioplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
