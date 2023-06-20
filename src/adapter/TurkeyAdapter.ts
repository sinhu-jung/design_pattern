import Duck from "./Duck";
import Turkey from "./Turkey";

class TurkeyAdapter implements Duck {
  turkey: Turkey;

  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  public quack(): void {
    this.turkey.gobble();
  }

  public fly(): void {
    this.turkey.fly();
  }
}

export default TurkeyAdapter;
