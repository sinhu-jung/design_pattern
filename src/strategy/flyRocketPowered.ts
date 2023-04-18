import FlyBehavior from "./flyBehavior";

class FlyRocketPowered implements FlyBehavior {
  public fly(): void {
    console.log("I'm flying with a rocket");
  }
}

export default FlyRocketPowered;
