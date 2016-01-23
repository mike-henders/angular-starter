import angular from 'vendor/angular.js';
import { foo } from './bar.js';

angular.module('app', [])
  .controller('HelloController', function($scope) {
    $scope.greeting = 'Hello, Angular Starter';
  });

export function think() {
  return foo;
}
