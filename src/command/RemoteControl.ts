import Command from "./Command";
import NoCommand from "./NoCommand";

class RemoteControl {
  onCommands: Command[];
  offCommands: Command[];

  constructor() {
    this.onCommands = [];
    this.offCommands = [];

    const noCommand = new NoCommand();
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
  }

  public setCommand(
    slot: number,
    onCommand: Command,
    offCommand: Command
  ): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
  }

  public offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
  }
}

export default RemoteControl;
