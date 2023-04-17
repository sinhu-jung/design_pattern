import Observer from "./Observer";
import Subject from "./Subject";

class SimpleSubject implements Subject {
  private observers: Observer[];
  private value: number;

  constructor() {
    this.observers = [];
    this.value = 0;
  }

  public registerObserver(o: Observer) {
    this.observers.push(o);
  }

  public removeObserver(o: Observer) {
    this.observers = this.observers.filter((observer) => observer !== o);
  }

  public notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.value));
  }

  public setValue(value: number) {
    this.value = value;
    this.notifyObservers();
  }
}

export default SimpleSubject;
