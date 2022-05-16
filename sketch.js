function setup() {
  createCanvas(500, 500);
  background(0);

  let nn = new RedeNeural(1, 3, 5);
  let inputs = [1, 2];
  nn.feedforward(inputs);
}

function draw() {}
