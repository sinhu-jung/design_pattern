import { Cheese } from "./Cheese";
import { Clams } from "./Clams";
import { Dough } from "./Dougn";
import { Pepperoni } from "./Pepperoni";
import { Sauce } from "./Sauce";
import { Veggies } from "./Veggies";

export interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggies[];
  createPepperoni(): Pepperoni;
  createClam(): Clams;
}
