import { foo } from 'app/bar.js';

describe('first jasmine test', function() {
  it('should pass', function() {
    expect(foo).toBe(42);
  });
});
