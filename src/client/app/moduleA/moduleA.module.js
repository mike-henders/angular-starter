import angular from 'vendor/angular.js';
import ModuleB from 'app/moduleB/moduleB.module.js';
import { Calculator } from './calculator.service.js';
import { Hello } from './hello.directive.js';

export default angular
  .module('moduleA', [ModuleB.name])
  .service('calculatorService', Calculator)
  .directive('hello', Hello);
