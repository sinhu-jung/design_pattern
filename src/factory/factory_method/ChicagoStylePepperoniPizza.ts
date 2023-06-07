import Pizza from "./pizza";

class ChicagoStylePepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = "시카고 스타일 페퍼로니 피자";
    this.dough = "매우 두꺼운 크러스트 반죽";
    this.sauce = "매실 토마토 소스";

    this.toppings.push("슈레드 모짜렐라 치즈");
    this.toppings.push("블랙 올리브");
    this.toppings.push("시금치");
    this.toppings.push("가지");
    this.toppings.push("슬라이스 페퍼로니");
  }

  cut(): void {
    console.log("피자를 네모난 조각으로 자르기");
  }
}

export default ChicagoStylePepperoniPizza;
