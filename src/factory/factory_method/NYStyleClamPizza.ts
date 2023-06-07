import Pizza from "./pizza";

class NYStyleClamPizza extends Pizza {
  constructor() {
    super();
    this.name = "뉴욕 스타일 조개 피자";
    this.dough = "씬 크러스트 도우";
    this.sauce = "마리나라 소스";

    this.toppings.push("잘게 썬 레지아노 치즈");
    this.toppings.push("Long Island Sound의 신선한 조개");
  }
}

export default NYStyleClamPizza;
