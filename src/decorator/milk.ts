import Beverage from "./beverage";
import CondimentDecorator from "./condimentDecorator";

class Milk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ", 우유";
  }

  public cost(): number {
    return 0.1 + this.beverage.cost();
  }
}

export default Milk;
