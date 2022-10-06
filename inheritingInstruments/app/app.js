class Instrument {
  constructor(loudness) {
    this.loudness = loudness;
  }

  jam(duration) {
    console.log(
      `Instrument from ${this.family} ${this.verb} at volume ${this.loudness}.`
    );
    // this.synth.triggerAttackRelease("Cm", `${duration}n`);
  }
}

class wind extends Instrument {
  constructor(loudness) {
    super(loudness);
    this.verb = "toots";
    this.type = "flute";
  }
}

class string extends Instrument {
  constructor(loudness) {
    super(loudness);
    this.verb = "plucks";
    this.type = "violin";
  }
}

class percussion extends Instrument {
  constructor(loudness) {
    super(loudness);
    this.verb = "strikes";
    this.type = "snare";
  }
}

let flute = new wind(3);
let cello = new string(2);
let snare = new wind(5);

let band = [flute, cello, snare];

for (let i = 0; i < band.length; i++) {
  band[i].jam();
}
// while (let i < band.length) {
//   band[i].jam();
//   i++;
// }
