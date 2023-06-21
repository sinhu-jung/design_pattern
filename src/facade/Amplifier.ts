import StreamingPlayer from "./StreamingPlayer";
import Tuner from "./Tuner";

class Amplifier {
  description: string;
  tuner: Tuner;
  player: StreamingPlayer;

  constructor(description: string) {
    this.description = description;
  }

  public on(): void {
    console.log(`${this.description} on`);
  }

  public off(): void {
    console.log(`${this.description} off`);
  }

  public setStereoSound(): void {
    console.log(`${this.description} stereo mode on`);
  }

  public setSurroundSound(): void {
    console.log(
      `${this.description} surround sound on (5 speakers, 1 subwoofer)`
    );
  }

  public setVolume(level: number): void {
    console.log(`${this.description} setting volume to ${level}`);
  }

  public setTuner(tuner: Tuner): void {
    console.log(`${this.description} setting tuner to ${this.player}`);
    this.tuner = tuner;
  }

  public setStreamingPlayer(player: StreamingPlayer) {
    console.log(`${this.description} setting Streaming player to ${player}`);
    this.player = player;
  }

  public toString(): string {
    return this.description;
  }
}

export default Amplifier;
