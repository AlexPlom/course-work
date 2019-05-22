import { TestBed } from '@angular/core/testing';

import { JoinedCoursesMappingService } from './joined-courses-mapping.service';

describe('JoinedCoursesMappingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoinedCoursesMappingService = TestBed.get(JoinedCoursesMappingService);
    expect(service).toBeTruthy();
  });
});
