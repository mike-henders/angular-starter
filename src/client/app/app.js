import angular from 'vendor/angular.js';
import moduleA from './moduleA/moduleA.module.js';
import { foo } from './bar.js';

angular.module('app', [moduleA.name]);

export function think() {
  return foo;
}
