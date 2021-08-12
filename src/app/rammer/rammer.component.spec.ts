import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RammerComponent } from './rammer.component';

describe('RammerComponent', () => {
  let component: RammerComponent;
  let fixture: ComponentFixture<RammerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RammerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
