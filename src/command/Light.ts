class Light {
  location: string = "";

  constructor(location: string) {
    this.location = location;
  }

  public on(): void {
    console.log(`${this.location} light is on`);
  }

  public off(): void {
    console.log(`${this.location} light is off`);
  }
}

export default Light;
