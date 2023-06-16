import CeilingFan from "./CeilingFan";
import Command from "./Command";

class CeilingFanOnCommand implements Command {
  ceilingFan: CeilingFan;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  public execute(): void {
    this.ceilingFan.high();
  }
}

export default CeilingFanOnCommand;
