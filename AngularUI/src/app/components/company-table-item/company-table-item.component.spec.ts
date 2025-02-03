import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTableItemComponent } from './company-table-item.component';

describe('CompanyTableItemComponent', () => {
  let component: CompanyTableItemComponent;
  let fixture: ComponentFixture<CompanyTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyTableItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
