exports.calculate = (req, res) => {
  const { operator, first_operand, second_operand } = req.body;
  console.log("tyope",typeof first_operand);
  if (typeof first_operand != "number" || typeof second_operand != "number") {
    res.status(400).json({
      error: "Operands are not valid",
    });
  } else if (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "/"
  ) {
    let result;
    switch (operator) {
      case "+": {
        result = first_operand + second_operand;
        break;
      }
      case "-": {
        result = first_operand - second_operand;
        break;
      }
      case "*": {
        result = first_operand * second_operand;
        break;
      }
      case "/": {
        result = first_operand / second_operand;
        break;
      }
    }
    res.status(200).json({ result });
  } else {
    res.status(400).json({
      error: "Operator is not valid",
    });
  }
  res.json(req.body);
};
