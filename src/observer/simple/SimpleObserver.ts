import Observer from "./observer";
import Subject from "./subject";

export class SimpleObserver implements Observer {
  private value: number | null;
  private simpleSubject: Subject | null;

  constructor(simpleSubject: Subject) {
    this.value = null;
    this.simpleSubject = simpleSubject;
    this.simpleSubject.registerObserver(this);
  }

  public display() {
    console.log("Value: ", this.value);
  }

  public update(value: number) {
    this.value = value;
    this.display();
  }
}
