import Beverage from "./beverage";

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "에스프레소";
  }

  public cost(): number {
    return 1.99;
  }
}

export default Espresso;
