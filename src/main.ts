import starBuzzMain from "./decorator/starBuzzMain";
import abstractFactory from "./factory/abstract_factory/main";
import factoryMethodMain from "./factory/factory_method/main";
import simpleObserverMain from "./observer/simple/simpleExampleMain";
import weatherObserverMain from "./observer/weather/weatherStation";
import weatherStationHeatIndexMain from "./observer/weather/weatherStationHeatIndex";
import miniDuckSimulator from "./strategy/miniDuckSimulator";
import miniDuckSimulator1 from "./strategy/miniDuckSimulator1";

const ducksimul = document.getElementById("miniDuckSimulator");
const ducksimul1 = document.getElementById("miniDuckSimulator1");
const simple = document.getElementById("simpleOpserver");
const weatherObserver = document.getElementById("weatherStation");
const weatherStationHeat = document.getElementById("weatherStationHeat");
const starBuzz = document.getElementById("starBuzz");
const pizzafm = document.getElementById("pizzafm");
const pizzaaf = document.getElementById("pizzaaf");

if (ducksimul) {
  ducksimul.onclick = (e) => {
    e.preventDefault();
    miniDuckSimulator();
  };
}

if (ducksimul1) {
  ducksimul1.onclick = (e) => {
    e.preventDefault();
    miniDuckSimulator1();
  };
}

if (simple) {
  simple.onclick = (e) => {
    e.preventDefault();
    simpleObserverMain();
  };
}

if (weatherObserver) {
  weatherObserver.onclick = (e) => {
    e.preventDefault();
    weatherObserverMain();
  };
}

if (weatherStationHeat) {
  weatherStationHeat.onclick = (e) => {
    e.preventDefault();
    weatherStationHeatIndexMain();
  };
}

if (starBuzz) {
  starBuzz.onclick = (e) => {
    e.preventDefault();
    starBuzzMain();
  };
}

if (pizzafm) {
  pizzafm.onclick = (e) => {
    e.preventDefault();
    factoryMethodMain();
  };
}

if (pizzaaf) {
  pizzaaf.onclick = (e) => {
    e.preventDefault();
    abstractFactory();
  };
}
