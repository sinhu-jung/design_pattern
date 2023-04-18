import Duck from "./duck";
import FlyWithWings from "./flyWithWings";
import Quack from "./quack";

class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  public display() {
    console.log("I'm a real Mallard duck");
  }
}

export default MallardDuck;
