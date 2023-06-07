import ChicagoPizzaStore from "./ChicagoPizzaStore";
import NYPizzaStore from "./NYPizzaStore";

function factoryMethodMain() {
  const nyStore = new NYPizzaStore();
  const chicagoStore = new ChicagoPizzaStore();

  let pizza = nyStore.orderPizza("cheese");
  console.log(`에단이 주문한 ${pizza.getName()}`);

  pizza = chicagoStore.orderPizza("cheese");
  console.log(`조엘이 주문한 ${pizza.getName()}`);
}

export default factoryMethodMain;
