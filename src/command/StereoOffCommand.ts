import Command from "./Command";
import Stereo from "./Stereo";

class StereoOffCommand implements Command {
  stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.off();
  }
}

export default StereoOffCommand;
