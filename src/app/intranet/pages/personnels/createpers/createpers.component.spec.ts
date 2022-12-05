import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepersComponent } from './createpers.component';

describe('CreatepersComponent', () => {
  let component: CreatepersComponent;
  let fixture: ComponentFixture<CreatepersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatepersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreatepersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
