class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;
  private static uniqueInstance: ChocolateBoiler;

  constructor() {
    this.empty = true;
    this.boiled = false;
  }

  public static getInstance(): ChocolateBoiler {
    if (!this.uniqueInstance) {
      this.uniqueInstance = new ChocolateBoiler();
    }

    return this.uniqueInstance;
  }

  public fill(): void {
    if (this.isEmpty()) {
      this.empty = false;
      this.boiled = false;
    }
  }

  public drain(): void {
    if (!this.isEmpty() && this.isBoiled()) {
      this.empty = true;
    }
  }

  public boil(): void {
    if (!this.isEmpty() && !this.isBoiled()) {
      this.boiled = true;
    }
  }

  public isEmpty(): boolean {
    return this.empty;
  }

  public isBoiled(): boolean {
    return this.boiled;
  }
}

export default ChocolateBoiler;
