import angular from 'vendor/angular.js';

function controller(calculatorService) {
  let vm = this;
  vm.position = 2;
}
controller.$inject = ['calculatorService'];

export function Hello() {
  return {
    restrict: 'E',
    controller: controller,
    controllerAs: 'vm',
    template: '<div>Hello, Angular Starter.  Your position is {{vm.position}}</div>'
  }
}
