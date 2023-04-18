import Duck from "./duck";
import FlyNoWay from "./flyNoWay";
import Quack from "./quack";

class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }

  public display(): void {
    console.log("I'm a model duck");
  }
}

export default ModelDuck;
