import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposeTable } from './propose-table';

describe('ProposeTable', () => {
  let component: ProposeTable;
  let fixture: ComponentFixture<ProposeTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposeTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposeTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
