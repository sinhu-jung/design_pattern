import Duck from "./duck";
import FlyNoWay from "./flyNoWay";
import MuteQuack from "./muteQuack";

class DecoyDuck extends Duck {
  constructor() {
    super();
    this.setFlyBehavior(new FlyNoWay());
    this.setQuackBehavior(new MuteQuack());
  }

  public display(): void {
    console.log("I'm a duck Decoy");
  }
}

export default DecoyDuck;
