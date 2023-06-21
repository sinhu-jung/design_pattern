import Amplifier from "./Amplifier";

class StreamingPlayer {
  description: string;
  currentChapter: number;
  amplifier: Amplifier;
  movie: string;

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

  public play(chapterOrMovie: string | number): void {
    if (typeof chapterOrMovie === "string") {
      this.movie = chapterOrMovie;
      this.currentChapter = 0;
      console.log(`${this.description} playing \" ${this.movie} \"`);
    } else {
      if (this.movie === null) {
        console.log(
          `${this.description} can't play chapter ${chapterOrMovie} no movie selected`
        );
      } else {
        this.currentChapter = chapterOrMovie;
        console.log(
          `${this.description} playing chapter ${this.currentChapter} of \" ${this.movie} \"`
        );
      }
    }
  }

  public stop(): void {
    this.currentChapter = 0;
    console.log(`${this.description} stopped \" ${this.movie} \"`);
  }

  public pause(): void {
    console.log(`${this.description} paused \" ${this.movie} \"`);
  }

  public setTwoChannelAudio(): void {
    console.log(`${this.description} set two channel audio`);
  }

  public setSurroundAudio(): void {
    console.log(`${this.description} set surround audio`);
  }

  public toString(): string {
    return this.description;
  }
}

export default StreamingPlayer;
