import { Observer } from "./observer";
import { Subject } from "./subject";

class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [] as Observer[];
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  public registerObserver = (o: Observer) => {
    this.observers.push(o);
  };

  public removeObserver = (o: Observer) => {
    this.observers = this.observers.filter((data) => data !== o);
  };

  public notifyObservers = () => {
    this.observers.forEach((observer) => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  };

  public measurementsChanged = () => {
    this.notifyObservers();
  };

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  public getTemperature(): number {
    return this.temperature;
  }

  public getHumidity(): number {
    return this.humidity;
  }

  public getPressure(): number {
    return this.pressure;
  }
}

export default WeatherData;
