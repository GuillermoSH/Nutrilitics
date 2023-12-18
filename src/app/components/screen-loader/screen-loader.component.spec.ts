import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenLoaderComponent } from './screen-loader.component';

describe('ScreenLoaderComponent', () => {
  let component: ScreenLoaderComponent;
  let fixture: ComponentFixture<ScreenLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenLoaderComponent]
    });
    fixture = TestBed.createComponent(ScreenLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
