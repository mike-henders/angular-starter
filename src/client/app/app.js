import { angular } from 'angular';
import { foo } from './bar.js';

angular.module('app', [])
  .controller('HelloController', function($scope) {
    $scope.greeting = "Hello, Angular Starter";
  });

export function think() {
  return foo;
}
