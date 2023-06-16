import Command from "./Command";
import GarageDoor from "./GarageDoor";

class GarageDoorDownCommand implements Command {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  public execute(): void {
    this.garageDoor.down();
  }
}

export default GarageDoorDownCommand;
