import Command from "./Command";
import Stereo from "./Stereo";

class StereoOnWithCDCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }
}

export default StereoOnWithCDCommand;
