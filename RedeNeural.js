function sigmoide(x) {
  return 1 / (1 + Math.exp(-x));
}

class RedeNeural {
  constructor(inputs, hidden, outputs) {
    this.inputs = inputs;
    this.hidden = hidden;
    this.outputs = outputs;

    this.bias_ih = new Matrix(this.hidden, 1);
    this.bias_ih.randomize();
    this.bias_ho = new Matrix(this.outputs, 1);
    this.bias_ho.randomize();

    this.weights_ih = new Matrix(this.hidden, this.inputs);
    this.weights_ih.randomize();

    this.weights_ho = new Matrix(this.outputs, this.hidden);
    this.weights_ho.randomize();
  }

  feedforward(input_array) {
    // 1. Input to Hidden
    let inputs = Matrix.fromArray(input_array);
    let hidden = Matrix.add(
      Matrix.multiply(this.weights_ih, inputs),
      this.bias_ih
    );

    hidden.map(sigmoide);

    // 2. Hidden to Output
    let outputs = Matrix.add(
      Matrix.multiply(this.weights_ho, hidden),
      this.bias_ho
    );

    outputs.map(sigmoide);

    outputs.print();
  }
}
