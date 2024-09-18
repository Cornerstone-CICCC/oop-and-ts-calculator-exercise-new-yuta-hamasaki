class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }
}

class Calculate extends Calculator {
  constructor(num1, num2, operation) {
    super(num1, num2);
    this.operation = operation;
  }

  compute() {
    switch (this.operation) {
      case 'add':
        return this.add();
      case 'subtract':
        return this.subtract();
      case 'multiply':
        return this.multiply();
      case 'divide':
        return this.divide();
      default:
        return "error";
    }
  }
}

function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;

  const calc = new Calculate(num1, num2, operation);
  const result = calc.compute();
  
  document.getElementById('result').textContent = result;
}

document.getElementById('calculateBtn').addEventListener('click', calculate);
