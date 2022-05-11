import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelAddComponent } from './personel-add.component';

describe('PersonelAddComponent', () => {
  let component: PersonelAddComponent;
  let fixture: ComponentFixture<PersonelAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonelAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
