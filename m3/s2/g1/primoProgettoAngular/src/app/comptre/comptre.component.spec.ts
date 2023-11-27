import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptreComponent } from './comptre.component';

describe('ComptreComponent', () => {
  let component: ComptreComponent;
  let fixture: ComponentFixture<ComptreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComptreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComptreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
