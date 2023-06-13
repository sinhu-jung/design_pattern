import ChocolateBoiler from "./ChocolateBoiler";

const ChocolateController = () => {
  const boiler = ChocolateBoiler.getInstance();
  boiler.fill();
  boiler.boil();
  boiler.drain();
  console.log(boiler);

  const boiler2 = ChocolateBoiler.getInstance();
  console.log(boiler2);
};

export default ChocolateController;
