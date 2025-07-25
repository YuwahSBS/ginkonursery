import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSubListsComponent } from './project-sub-lists.component';

describe('ProjectSubListsComponent', () => {
  let component: ProjectSubListsComponent;
  let fixture: ComponentFixture<ProjectSubListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSubListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSubListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
