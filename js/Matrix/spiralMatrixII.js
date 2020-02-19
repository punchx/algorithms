class SpiralMatrix {
  constructor(n) {
    this.matrix = [];
    for (let i = 0; i < n; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < n; j++) {
        this.matrix[i][j] = 0;
      }
    }
    this.x = 0;
    this.y = 0;
    this.n = n;
    this.step = 1;
  }

  fillRight() {
    for (let i = 0; i < this.n - 1; i++) {
      this.matrix[this.y][this.x++] = this.step++;
    }
  }

  fillDown() {
    for (let i = 0; i < this.n - 1; i++) {
      this.matrix[this.y++][this.x] = this.step++;
    }
  }

  fillLeft() {
    for (let i = 0; i < this.n - 1; i++) {
      this.matrix[this.y][this.x--] = this.step++;
    }
  }

  fillUp() {
    for (let i = 0; i < this.n - 1; i++) {
      this.matrix[this.y--][this.x] = this.step++;
    }
  }

  fill() {
    let steps = (this.n) ** 2;
    while (this.step <= steps) {
      if (this.n == 1) {
        this.matrix[this.y][this.x] = this.step;
        break;
      }
      this.fillRight();
      this.fillDown();
      this.fillLeft();
      this.fillUp();
      this.x++;
      this.y++;
      this.n = this.n - 2;
    }
    return this;
  }

  print() {
    this.matrix.forEach(el => console.log(el.join(' ')));
  }
}


let matrix = new SpiralMatrix(5);

matrix.fill().print();