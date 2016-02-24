export class Calculator {
  constructor(adderService) {
    this.adder = adderService;
  }

  add(a, b) {
    return this.adder.execute(a, b);
  }
}

Calculator.$inject = ['adderService'];
