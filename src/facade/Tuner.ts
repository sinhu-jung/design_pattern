import Amplifier from "./Amplifier";

class Tuner {
  description: string;
  amplifier: Amplifier;
  frequency: number;

  constructor(description: string, amplifier: Amplifier) {
    this.description = description;
    this.amplifier = amplifier;
  }

  public on(): void {
    console.log(`${this.description} on`);
  }

  public off(): void {
    console.log(`${this.description} off`);
  }

  public setFrequency(frequency: number) {
    console.log(`${this.description} setting frequency to ${frequency}`);
    this.frequency = frequency;
  }

  public setAm(): void {
    console.log(`${this.description} setting AM mode`);
  }

  public setFm(): void {
    console.log(`${this.description} setting FM mode`);
  }

  public toString(): string {
    return this.description;
  }
}

export default Tuner;
