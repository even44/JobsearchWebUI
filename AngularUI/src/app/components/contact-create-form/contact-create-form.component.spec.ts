import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCreateFormComponent } from './contact-create-form.component';

describe('ContactCreateFormComponent', () => {
  let component: ContactCreateFormComponent;
  let fixture: ComponentFixture<ContactCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCreateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
