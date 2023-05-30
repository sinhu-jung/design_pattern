import Beverage from "./beverage";

class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "다크 로스트 커피";
  }

  public cost(): number {
    return 0.99;
  }
}

export default DarkRoast;
