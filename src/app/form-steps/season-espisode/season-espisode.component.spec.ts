import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonEspisodeComponent } from './season-espisode.component';

describe('SeasonEspisodeComponent', () => {
  let component: SeasonEspisodeComponent;
  let fixture: ComponentFixture<SeasonEspisodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonEspisodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonEspisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
