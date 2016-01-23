import { think } from 'app/app.js';

describe('first jasmine test', function() {
  it('should think', function() {
    expect(think()).toBe(42);
  });
});
