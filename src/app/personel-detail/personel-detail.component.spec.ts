import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelDetailComponent } from './personel-detail.component';

describe('PersonelDetailComponent', () => {
  let component: PersonelDetailComponent;
  let fixture: ComponentFixture<PersonelDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonelDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
