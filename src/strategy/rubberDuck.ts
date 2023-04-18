import Duck from "./duck";
import FlyBehavior from "./flyBehavior";
import FlyNoWay from "./flyNoWay";
import QuackBehavior from "./quackBehavior";

class RubberDuck extends Duck {
  constructor(flyBehavior?: FlyBehavior, quackBehavior?: QuackBehavior) {
    super();

    if (!flyBehavior && !quackBehavior) {
      this.flyBehavior = new FlyNoWay();
      this.quackBehavior = {
        quack: () => console.log("Squeak"),
      };
    }

    if (flyBehavior && quackBehavior) {
      this.flyBehavior = flyBehavior;
      this.quackBehavior = quackBehavior;
    }
  }

  public display() {
    console.log("I'm a rubber duckie");
  }
}

export default RubberDuck;
