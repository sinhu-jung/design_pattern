import AdapterMain from "./adapter/AdapterMain";
import RemoteLoader from "./command/RemoteLoader";
import starBuzzMain from "./decorator/starBuzzMain";
import FacadeMain from "./facade/FacadeMain";
import abstractFactory from "./factory/abstract_factory/main";
import factoryMethodMain from "./factory/factory_method/main";
import simpleObserverMain from "./observer/simple/simpleExampleMain";
import weatherObserverMain from "./observer/weather/weatherStation";
import weatherStationHeatIndexMain from "./observer/weather/weatherStationHeatIndex";
import ChocolateController from "./singleton/ChocolateController";
import miniDuckSimulator from "./strategy/miniDuckSimulator";
import miniDuckSimulator1 from "./strategy/miniDuckSimulator1";

const ducksimul = document.getElementById("miniDuckSimulator")!;
const ducksimul1 = document.getElementById("miniDuckSimulator1")!;
const simple = document.getElementById("simpleOpserver")!;
const weatherObserver = document.getElementById("weatherStation")!;
const weatherStationHeat = document.getElementById("weatherStationHeat")!;
const starBuzz = document.getElementById("starBuzz")!;
const pizzafm = document.getElementById("pizzafm")!;
const pizzaaf = document.getElementById("pizzaaf")!;
const chocolate = document.getElementById("chocolate")!;
const remote = document.getElementById("remote")!;
const adapter = document.getElementById("adapter")!;
const facade = document.getElementById("facade")!;

facade.onclick = (e) => {
  e.preventDefault();
  FacadeMain();
};

adapter.onclick = (e) => {
  e.preventDefault();
  AdapterMain();
};

remote.onclick = (e) => {
  e.preventDefault();
  RemoteLoader();
};

chocolate.onclick = (e) => {
  e.preventDefault();
  ChocolateController();
};

ducksimul.onclick = (e) => {
  e.preventDefault();
  miniDuckSimulator();
};

ducksimul1.onclick = (e) => {
  e.preventDefault();
  miniDuckSimulator1();
};

simple.onclick = (e) => {
  e.preventDefault();
  simpleObserverMain();
};

weatherObserver.onclick = (e) => {
  e.preventDefault();
  weatherObserverMain();
};

weatherStationHeat.onclick = (e) => {
  e.preventDefault();
  weatherStationHeatIndexMain();
};

starBuzz.onclick = (e) => {
  e.preventDefault();
  starBuzzMain();
};

pizzafm.onclick = (e) => {
  e.preventDefault();
  factoryMethodMain();
};

pizzaaf.onclick = (e) => {
  e.preventDefault();
  abstractFactory();
};
