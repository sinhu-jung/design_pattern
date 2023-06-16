import Command from "./Command";
import GarageDoor from "./GarageDoor";

class GarageDoorUpCommand implements Command {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  public execute(): void {
    this.garageDoor.up();
  }
}

export default GarageDoorUpCommand;
