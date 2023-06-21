import Amplifier from "./Amplifier";
import HomeTheaterFacade from "./HomeTheaterFacade";
import PopcornPopper from "./PopcornPopper";
import Projector from "./Projector";
import FaScreen from "./Screen";
import StreamingPlayer from "./StreamingPlayer";
import TheaterLights from "./TheaterLights";
import Tuner from "./Tuner";

function FacadeMain() {
  const amp: Amplifier = new Amplifier("Amplifier");
  const tuner: Tuner = new Tuner("AM/FM Tuner", amp);
  const player: StreamingPlayer = new StreamingPlayer("Streaming Player", amp);
  //   const cd: CdPlayer = new CdPlayer("CD Player", amp);
  const projector: Projector = new Projector("Projector", player);
  const lights: TheaterLights = new TheaterLights("Theaer Ceiling Lights");
  const screen: FaScreen = new FaScreen("Theater Screen");
  const popper: PopcornPopper = new PopcornPopper("Popcorn Popper");

  const homeTheater: HomeTheaterFacade = new HomeTheaterFacade(
    amp,
    tuner,
    player,
    projector,
    screen,
    lights,
    popper
  );

  homeTheater.watchMovie("Raiders of the Lost Ark");
  homeTheater.endMovie();
}

export default FacadeMain;
