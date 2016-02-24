import angular from 'vendor/angular.js';
import moduleA from './moduleA/moduleA.module.js';
import { foo } from './bar.js';

angular.module('app', [moduleA.name])
  .controller('HelloController', function($scope, calculatorService) {
    let position = calculatorService.add(1,1);
    $scope.greeting = 'Hello, Angular Starter.  You are number ' + position;
  });

export function think() {
  return foo;
}
