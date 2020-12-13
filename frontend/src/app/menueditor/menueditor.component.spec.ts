import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenueditorComponent } from './menueditor.component';

describe('MenueditorComponent', () => {
  let component: MenueditorComponent;
  let fixture: ComponentFixture<MenueditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenueditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenueditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
