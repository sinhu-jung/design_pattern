import Duck from "./Duck";
import MallardDuck from "./MallardDuck";
import Turkey from "./Turkey";
import TurkeyAdapter from "./TurkeyAdapter";
import WildTurkey from "./WildTurkey";

const testDuck = (duck: Duck) => {
  duck.quack();
  duck.fly();
};

function AdapterMain() {
  const duck: Duck = new MallardDuck();

  const turkey: Turkey = new WildTurkey();
  const turkeyAdapter: Duck = new TurkeyAdapter(turkey);

  console.log("칠면조가 말하길");
  turkey.gobble();
  turkey.fly();

  console.log("오리가 말하길");
  testDuck(duck);

  console.log("칠면조 어댑터가 말하길");
  testDuck(turkeyAdapter);
}

export default AdapterMain;
