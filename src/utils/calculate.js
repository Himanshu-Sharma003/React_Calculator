import math from "mathjs";

export default function calculate(obj, buttonName) {
  if (buttonName === "CE") {
    return {
      lastNumber: "0"
    };
  }
  if (buttonName === "C") {
    return {
      total: 0,
      lastNumber: undefined,
      stack: [],
      operation: undefined
    };
  }
  var re = new RegExp("^([0-9])$");
  if (re.test(buttonName)) {
    if (buttonName === "0" && obj.lastNumber === "0") {
      return {};
    }
    return {
      lastNumber: (!obj.lastNumber || obj.lastNumber==="0")? buttonName : obj.lastNumber + buttonName,
      total: obj.operation ? obj.total : undefined
    };
  } else {
    if (buttonName === ".") {
      if (obj.lastNumber && !obj.lastNumber.includes(".")) {
        return { lastNumber: obj.lastNumber + "." };
      }
      if (obj.operation) {
        return {
          total: lastNumber,
          lastNumber: "0."
        };
      }
      if (obj.total) {
        if (obj.total.includes(".")) {
          return {};
        }
        return { total: obj.total + "." };
      }
      return { total: "0." };
    } else if (buttonName === "=") {
      if (obj.lastNumber && obj.operation) {
        return {
          total: operate(obj.total, obj.lastNumber, obj.operation),
          lastNumber: undefined,
          operation: undefined,
          stack: []
        };
      }
    } else if (buttonName === "+/-") {
        if (obj.lastNumber) {
          return { lastNumber: (-1 * parseFloat(obj.lastNumber)).toString() };
        }
        if (obj.total) {
          return { total: (-1 * parseFloat(obj.total)).toString() };
        }
        return {};
    } else {
      let stack = [...obj.stack, obj.lastNumber, buttonName];
      if (obj.operation) {
        obj.stack.pop();
        stack=[...obj.stack, buttonName]
      }
      return {
        total: obj.total ? obj.total : obj.lastNumber,
        lastNumber: undefined,
        operation: buttonName,
        stack: (obj.total && !obj.operation)? ([...obj.stack, obj.total, buttonName] ): stack
      };
    }
  }
}

function operate(number1, number2, operation) {
  let result;
  switch (operation) {
    case "+":
      result = math.add(number1, number2);
      break;
    case "-":
      result = math.subtract(number1, number2);
      break;
    case "x":
      result = math.multiply(number1, number2);
      break;
    case "/":
      result = math.divide(number1, number2);
      break;
  }

  return result;
}
