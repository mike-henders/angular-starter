/* global inject */
import { } from 'vendor/angular-mocks.js';
import ModuleA from 'app/moduleA/moduleA.module.js';

describe('hello world directive in moduleA', () => {
  let element;
  let scope;

  beforeEach(angular.mock.module(ModuleA.name));

  beforeEach(inject(($rootScope, $compile) => {
    scope = $rootScope.$new();
    element = $compile('<hello></hello>')(scope);
  }));

  it('computes the position', () => {
    scope.$digest();
    expect(element.html()).toContain('position is 2');
  });
});
