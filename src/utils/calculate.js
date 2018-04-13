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
    // If there is no operation, update next and clear the value
    if (obj.lastNumber) {
      return {
        total: obj.total,
        lastNumber: obj.lastNumber + buttonName
      };
    }
    return {
      lastNumber: buttonName,
      total: obj.total
    };
  } else {
    if (buttonName === ".") {
      if (obj.lastNumber) {
        if (obj.lastNumber.includes(".")) {
          return {};
        }
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
          lastNumber: null,
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
      if (obj.operation) {
        console.log(obj.stack)
        obj.stack.pop();
        console.log(obj.stack)
        return {
          operation: buttonName,
          stack: [...obj.stack, buttonName]
        };
      }
      if (obj.total) {
        return {
          stack: [...obj.stack, obj.total, buttonName],
          operation: buttonName,
          lastNumber: undefined
        };
      } 
      return {
        total: obj.lastNumber,
        lastNumber: undefined,
        operation: buttonName,
        stack: [...obj.stack, obj.lastNumber, buttonName]
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
