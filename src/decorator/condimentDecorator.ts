import Beverage from "./beverage";

abstract class CondimentDecorator extends Beverage {
  beverage: Beverage;
  public abstract getDescription(): string;
}

export default CondimentDecorator;
