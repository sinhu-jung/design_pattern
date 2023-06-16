class CeilingFan {
  location: string = "";
  level: number;
  public static HIGH: number = 2;
  public static MEDIUM: number = 1;
  public static LOW: number = 0;

  constructor(location: string) {
    this.location = location;
  }

  public high(): void {
    this.level = CeilingFan.HIGH;
    console.log(`${this.location} ceiling fan is on high`);
  }

  public medium(): void {
    this.level = CeilingFan.MEDIUM;
    console.log(`${this.location} ceiling fan is on medium`);
  }

  public low(): void {
    this.level = CeilingFan.LOW;
    console.log(`${this.location} ceiling fan is on low`);
  }

  public off(): void {
    this.level = 0;
    console.log(`${this.location} ceiling fan is off`);
  }

  public getSpeed(): number {
    return this.level;
  }
}

export default CeilingFan;
