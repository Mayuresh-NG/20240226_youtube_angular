import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubfeedComponent } from './subfeed.component';

describe('SubfeedComponent', () => {
  let component: SubfeedComponent;
  let fixture: ComponentFixture<SubfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubfeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
