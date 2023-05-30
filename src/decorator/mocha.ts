import Beverage from "./beverage";
import CondimentDecorator from "./condimentDecorator";

class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ", 모카";
  }

  public cost(): number {
    return 0.2 + this.beverage.cost();
  }
}

export default Mocha;
