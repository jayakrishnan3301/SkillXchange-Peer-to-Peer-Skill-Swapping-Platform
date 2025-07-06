import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillXchangeComponent } from './skill-xchange.component';

describe('SkillXchangeComponent', () => {
  let component: SkillXchangeComponent;
  let fixture: ComponentFixture<SkillXchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillXchangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillXchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
