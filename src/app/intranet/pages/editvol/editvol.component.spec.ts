import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvolComponent } from './editvol.component';

describe('EditvolComponent', () => {
  let component: EditvolComponent;
  let fixture: ComponentFixture<EditvolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditvolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditvolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
