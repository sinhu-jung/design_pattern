import Beverage from "./beverage";
import CondimentDecorator from "./condimentDecorator";

class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ", 두유";
  }

  public cost(): number {
    return 0.15 + this.beverage.cost();
  }
}

export default Soy;
