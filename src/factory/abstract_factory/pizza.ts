import { Cheese } from "./Cheese";
import { Clams } from "./Clams";
import { Dough } from "./Dougn";
import { Pepperoni } from "./Pepperoni";
import { Sauce } from "./Sauce";
import { Veggies } from "./Veggies";

abstract class Pizza {
  name: string;
  dough: Dough;
  sauce: Sauce;
  veggies: Veggies[];
  cheese: Cheese;
  pepperoni: Pepperoni;
  clam: Clams;

  abstract prepare(): void;

  bake(): void {
    console.log(`350도에서 25분 간 굽기`);
  }

  cut(): void {
    console.log(`피자를 사선으로 자르기`);
  }

  box(): void {
    console.log(`상자에 피자 담기`);
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

export default Pizza;
