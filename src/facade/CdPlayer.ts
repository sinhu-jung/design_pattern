import Amplifier from "./Amplifier";

class CdPlayer {
  description: string;
  currentTrack: number;
  amplifier: Amplifier;
  title: string;

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

  public play(titleOrTrack: string | number): void {
    if (typeof titleOrTrack === "string") {
      this.title = titleOrTrack;
      this.currentTrack = 0;
      console.log(`${this.description} playing \" ${this.title} \"`);
    } else {
      if (this.title === null) {
        console.log(
          `${this.description} can't play track ${titleOrTrack} no cd inserted`
        );
      } else {
        this.currentTrack = titleOrTrack;
        console.log(`${this.description} playing track ${this.currentTrack}`);
      }
    }
  }

  public stop(): void {
    this.currentTrack = 0;
    console.log(`${this.description} stopped`);
  }

  public pause(): void {
    console.log(`${this.description} paused \" ${this.title} \"`);
  }

  public toString(): string {
    return this.description;
  }
}

export default CdPlayer;
