import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcesspassComponent } from './acesspass.component';

describe('AcesspassComponent', () => {
  let component: AcesspassComponent;
  let fixture: ComponentFixture<AcesspassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcesspassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcesspassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
