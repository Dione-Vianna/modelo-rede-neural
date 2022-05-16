class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.data = [];

    for (let i = 0; i < rows; i++) {
      let arr = [];
      for (let j = 0; j < cols; j++) {
        arr.push(0);
      }
      this.data.push(arr);
    }
  }

  static fromArray(arr) {
    var matrix = new Matrix(arr.length, 1);

    matrix.map((num, i, j) => {
      return arr[i];
    });
    return matrix;
  }

  print() {
    console.table(this.data);
  }

  randomize() {
    this.map((elm, i, j) => {
      return Math.random() * 2 - 1;
    });
  }

  static map(m1, func) {
    let matrix = new Matrix(m1.rows, m2.rows);
    matrix.data = matrix.data.map((arr, i) => {
      return arr.map((num, j) => {
        return func(num, i, j);
      });
    });

    return matrix;
  }

  map(func) {
    this.data = this.data.map((arr, i) => {
      return arr.map((num, j) => {
        return func(num, i, j);
      });
    });

    return this;
  }

  static add(m1, m2) {
    var matrix = new Matrix(m1.rows, m1.cols);
    matrix.map((num, i, j) => {
      return m1.data[i][j] + m2.data[i][j];
    });
    return matrix;
  }

  static multiply(m1, m2) {
    var matrix = new Matrix(m1.rows, m2.cols);
    matrix.map((num, i, j) => {
      let sum = 0;

      for (let k = 0; k < m1.cols; k++) {
        let elm1 = m1.data[i][k];
        let elm2 = m2.data[k][j];

        sum += elm1 * elm2;
      }
      return sum;
    });

    return matrix;
  }
}
