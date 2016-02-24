import angular from 'vendor/angular.js';
import { Calculator } from './calculator.service.js';
import { Hello } from './hello.directive.js';

export default angular
  .module('moduleA', [])
  .service('calculatorService', Calculator)
  .directive('hello', Hello);
