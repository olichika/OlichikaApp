import { TestBed, async, inject } from '@angular/core/testing';

import { ProjectDetailGuard } from './project-detail.guard';

describe('ProjectDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectDetailGuard]
    });
  });

  it('should ...', inject([ProjectDetailGuard], (guard: ProjectDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
