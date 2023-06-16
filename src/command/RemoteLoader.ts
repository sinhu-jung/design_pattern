import CeilingFan from "./CeilingFan";
import CeilingFanOffCommand from "./CeilingFanOffCommand";
import CeilingFanOnCommand from "./CeilingFanOnCommand";
import GarageDoor from "./GarageDoor";
import GarageDoorDownCommand from "./GarageDoorDownCommand";
import GarageDoorUpCommand from "./GarageDoorUpCommand";
import Light from "./Light";
import LightOffCommand from "./LightOffCommand";
import LightOnCommand from "./LightOnCommand";
import RemoteControl from "./RemoteControl";
import Stereo from "./Stereo";
import StereoOffCommand from "./StereoOffCommand";
import StereoOnWithCDCommand from "./StereoOnWithCDCommand";

function RemoteLoader() {
  const remoteControl: RemoteControl = new RemoteControl();

  const livingRoomLight: Light = new Light("Living Room");
  const kitchenLight: Light = new Light("Kitchen");
  const ceilingFan: CeilingFan = new CeilingFan("Living Room");
  const garageDoor: GarageDoor = new GarageDoor("Garage");
  const stereo: Stereo = new Stereo("Living Room");

  const livingRoomLightOn: LightOnCommand = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff: LightOffCommand = new LightOffCommand(
    livingRoomLight
  );
  const kitchenLightOn: LightOnCommand = new LightOnCommand(kitchenLight);
  const kitchenLightOff: LightOffCommand = new LightOffCommand(kitchenLight);

  const ceilingFanOn: CeilingFanOnCommand = new CeilingFanOnCommand(ceilingFan);
  const ceilingFanOff: CeilingFanOffCommand = new CeilingFanOffCommand(
    ceilingFan
  );

  const garageDoorUp: GarageDoorUpCommand = new GarageDoorUpCommand(garageDoor);
  const garageDoorDown: GarageDoorDownCommand = new GarageDoorDownCommand(
    garageDoor
  );

  const stereoOnWithCD: StereoOnWithCDCommand = new StereoOnWithCDCommand(
    stereo
  );
  const stereoOff: StereoOffCommand = new StereoOffCommand(stereo);

  remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
  remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
  remoteControl.setCommand(2, ceilingFanOn, ceilingFanOff);
  remoteControl.setCommand(3, stereoOnWithCD, stereoOff);
  remoteControl.setCommand(4, garageDoorUp, garageDoorDown);

  console.log(remoteControl);

  remoteControl.onButtonWasPushed(0);
  remoteControl.offButtonWasPushed(0);
  remoteControl.onButtonWasPushed(1);
  remoteControl.offButtonWasPushed(1);
  remoteControl.onButtonWasPushed(2);
  remoteControl.offButtonWasPushed(2);
  remoteControl.onButtonWasPushed(3);
  remoteControl.offButtonWasPushed(3);
  remoteControl.onButtonWasPushed(4);
  remoteControl.offButtonWasPushed(4);
}

export default RemoteLoader;
