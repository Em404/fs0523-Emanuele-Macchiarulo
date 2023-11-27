import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompdueComponent } from './compdue.component';

describe('CompdueComponent', () => {
  let component: CompdueComponent;
  let fixture: ComponentFixture<CompdueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompdueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
