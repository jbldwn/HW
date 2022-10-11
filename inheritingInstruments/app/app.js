class Instrument {
  constructor(loudness, name) {
    this.loudness = loudness;
    this.name = name;
  }

  jam(duration) {
    console.log(
      `${this.name} from ${this.family} ${this.verb} at volume ${this.loudness}.`
    );
    // this.synth.triggerAttackRelease("Cm", `${duration}n`);
  }
}

class wind extends Instrument {
  constructor(loudness, name) {
    super(loudness, name);
    this.verb = "toots";
    this.family = "wind section";
  }
}

class string extends Instrument {
  constructor(loudness, name) {
    super(loudness, name);
    this.verb = "plucks";
    this.family = "string section";
  }
}

class percussion extends Instrument {
  constructor(loudness, name) {
    super(loudness, name);
    this.verb = "strikes";
    this.family = "percussion section";
  }
}

let flute = new wind(3, "flute");
let cello = new string(2, "cello");
let snare = new percussion(5, "snare");

let band = [flute, cello, snare];

for (let i = 0; i < band.length; i++) {
  band[i].jam();
}
