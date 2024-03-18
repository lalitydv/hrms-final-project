import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFileOfficialDocumenComponent } from './add-file-official-documen.component';

describe('AddFileOfficialDocumenComponent', () => {
  let component: AddFileOfficialDocumenComponent;
  let fixture: ComponentFixture<AddFileOfficialDocumenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFileOfficialDocumenComponent]
    });
    fixture = TestBed.createComponent(AddFileOfficialDocumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
