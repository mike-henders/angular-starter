import angular from 'vendor/angular.js';
import { Adder } from './adder.service.js';

export default angular
  .module('moduleB', [])
  .service('adderService', Adder);
