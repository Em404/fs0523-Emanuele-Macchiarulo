import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompunoComponent } from './compuno.component';

describe('CompunoComponent', () => {
  let component: CompunoComponent;
  let fixture: ComponentFixture<CompunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
