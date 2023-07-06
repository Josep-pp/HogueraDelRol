import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OraculoComponent } from './oraculo.component';

describe('OraculoComponent', () => {
  let component: OraculoComponent;
  let fixture: ComponentFixture<OraculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OraculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OraculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
