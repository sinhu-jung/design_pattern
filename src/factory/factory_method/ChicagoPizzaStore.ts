import ChicagoStyleCheesePizza from "./ChicagoStyleCheesePizza";
import ChicagoStyleClamPizza from "./ChicagoStyleClamPizza";
import ChicagoStylePepperoniPizza from "./ChicagoStylePepperoniPizza";
import ChicagoStyleVeggiePizza from "./ChicagoStyleVeggiePizza";
import Pizza from "./pizza";
import PizzaStore from "./pizzaStore";

class ChicagoPizzaStore extends PizzaStore {
  createPizza(item: string): Pizza {
    switch (item) {
      case "cheese":
        return new ChicagoStyleCheesePizza();
      case "veggie":
        return new ChicagoStyleVeggiePizza();
      case "clam":
        return new ChicagoStyleClamPizza();
      case "pepperoni":
        return new ChicagoStylePepperoniPizza();
      default:
        return new ChicagoStyleCheesePizza();
    }
  }
}

export default ChicagoPizzaStore;
