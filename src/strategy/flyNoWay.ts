import FlyBehavior from "./flyBehavior";

class FlyNoWay implements FlyBehavior {
  public fly() {
    console.log("I can't fly");
  }
}

export default FlyNoWay;
