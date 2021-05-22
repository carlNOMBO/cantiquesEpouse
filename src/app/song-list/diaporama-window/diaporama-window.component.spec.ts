import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaporamaWindowComponent } from './diaporama-window.component';

describe('DiaporamaWindowComponent', () => {
  let component: DiaporamaWindowComponent;
  let fixture: ComponentFixture<DiaporamaWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaporamaWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaporamaWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
