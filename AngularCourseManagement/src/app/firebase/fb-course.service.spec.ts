import { TestBed } from '@angular/core/testing';

import { FbCourseService } from './fb-course.service';

describe('FbCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FbCourseService = TestBed.get(FbCourseService);
    expect(service).toBeTruthy();
  });
});
