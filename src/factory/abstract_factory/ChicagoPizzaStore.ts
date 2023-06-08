import CheesePizza from "./CheesePizza";
import ChicagoPizzaIngredientFactory from "./ChicagoPizzaIngredientFactory";
import ClamPizza from "./ClamPizza";
import PepperoniPizza from "./PepperoniPizza";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
import PizzaStore from "./PizzaStore";
import VeggiePizza from "./VeggiePizza";
import Pizza from "./pizza";

class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(item: string): Pizza {
    let pizza: Pizza | null = null;
    const ingredientFactory: PizzaIngredientFactory =
      new ChicagoPizzaIngredientFactory();

    if (item === "cheese") {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName("시카고 스타일 치즈 피자");
    } else if (item === "veggie") {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName("시카고 스타일 야채 피자");
    } else if (item === "clam") {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName("시카고 스타일 조개 피자");
    } else if (item === "pepperoni") {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName("시카고 스타일 페퍼로니 피자");
    } else {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName("시카고 스타일 치즈 피자");
    }

    return pizza as Pizza;
  }
}
export default ChicagoPizzaStore;
