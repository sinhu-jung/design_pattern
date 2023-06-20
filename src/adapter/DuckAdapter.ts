import Duck from "./Duck";
import Turkey from "./Turkey";

class DuckAdapter implements Turkey {
  duck: Duck;
  rand: number;

  constructor(duck: Duck) {
    this.duck = duck;
    this.rand = Math.floor(Math.random() * 6);
  }

  public gobble(): void {
    this.duck.quack();
  }

  public fly(): void {
    if (this.rand === 0) {
      this.duck.fly();
    }
  }
}

export default DuckAdapter;
