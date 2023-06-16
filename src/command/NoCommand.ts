import Command from "./Command";

class NoCommand implements Command {
  public execute(): void {}
}

export default NoCommand;
