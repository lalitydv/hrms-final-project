import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileVaultTableComponent } from './file-vault-table.component';

describe('FileVaultTableComponent', () => {
  let component: FileVaultTableComponent;
  let fixture: ComponentFixture<FileVaultTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileVaultTableComponent]
    });
    fixture = TestBed.createComponent(FileVaultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
