import StreamingPlayer from "./StreamingPlayer";

class Projector {
  description: string;
  player: StreamingPlayer;

  constructor(descripton: string, player: StreamingPlayer) {
    this.description = descripton;
    this.player = player;
  }

  public on(): void {
    console.log(`${this.description} on`);
  }

  public off(): void {
    console.log(`${this.description} off`);
  }

  public wideScreenMode(): void {
    console.log(`${this.description} in widescreen mode (16x9 aspect ratio)`);
  }

  public tvMode(): void {
    console.log(`${this.description} in tv mode (4x3 aspect ratio)`);
  }

  public toString(): string {
    return this.description;
  }
}

export default Projector;
