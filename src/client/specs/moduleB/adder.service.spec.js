import angularMocks from 'vendor/angular-mocks.js';
import ModuleB from 'app/moduleB/moduleB.module.js';

describe('moduleB adder service', () => {
  'use strict';

  let adderService;

  beforeEach(angular.mock.module(ModuleB.name));

  beforeEach(inject((_adderService_) => {
    adderService = _adderService_;
  }));

  it('adds two numbers', () => {
    expect(adderService.execute(1,313)).toBe(314);
  });
});
