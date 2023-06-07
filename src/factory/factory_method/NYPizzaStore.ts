import NYStyleCheesePizza from "./NYStyleCheesePizza";
import NYStyleClamPizza from "./NYStyleClamPizza";
import NYStylePepperoniPizza from "./NYStylePepperoniPizza";
import NYStyleVeggiePizza from "./NYStyleVeggiePizza";
import Pizza from "./pizza";
import PizzaStore from "./pizzaStore";

class NYPizzaStore extends PizzaStore {
  createPizza(item: string): Pizza {
    switch (item) {
      case "cheese":
        return new NYStyleCheesePizza();
      case "veggie":
        return new NYStyleVeggiePizza();
      case "clam":
        return new NYStyleClamPizza();
      case "pepperoni":
        return new NYStylePepperoniPizza();
      default:
        return new NYStyleCheesePizza();
    }
  }
}

export default NYPizzaStore;
