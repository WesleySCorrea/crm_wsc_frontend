import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Propose } from './propose';

describe('Propose', () => {
  let component: Propose;
  let fixture: ComponentFixture<Propose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Propose]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Propose);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
