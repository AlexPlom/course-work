import { TestBed } from '@angular/core/testing';

import { CourseRatingService } from './course-rating.service';

describe('CourseRatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseRatingService = TestBed.get(CourseRatingService);
    expect(service).toBeTruthy();
  });
});
