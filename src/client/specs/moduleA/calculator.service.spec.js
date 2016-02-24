import angularMocks from 'vendor/angular-mocks.js';
import ModuleA from 'app/moduleA/moduleA.module.js';

describe('calculator service in moduleA', () => {
  'use strict';

  let calculatorService;

  beforeEach(angular.mock.module(ModuleA.name));

  beforeEach(inject((_calculatorService_) => {
    calculatorService = _calculatorService_;
  }));

  it('adds two numbers', () => {
    expect(calculatorService.add(7, 6)).toBe(13);
  });
});
