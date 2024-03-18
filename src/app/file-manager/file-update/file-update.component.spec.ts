import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUpdateComponent } from './file-update.component';

describe('FileUpdateComponent', () => {
  let component: FileUpdateComponent;
  let fixture: ComponentFixture<FileUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileUpdateComponent]
    });
    fixture = TestBed.createComponent(FileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
