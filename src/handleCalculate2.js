function handleCalculate2() {
  let sumOfPlus = 0;
  let sumOfMinus = 0;

  const stringsToAdd = display
    .split("+")
    .filter((stringOfANumber) => /^\d+$/.test(stringOfANumber));
  if (stringsToAdd.length !== 0) {
    sumOfPlus = stringsToAdd
      .map((stringOfANumber) => parseInt(stringOfANumber, 10))
      .reduce((a, b) => a + b);
  }

  const stringsToSubtract = display
    .split("+")
    .filter((string) => string.includes("-"));
  if (stringsToSubtract.length !== 0) {
    sumOfMinus = stringsToSubtract
      .map((string) => string.split("-"))
      .map((array) => array.reduce((a, b) => a - b))
      .reduce((a, b) => a + b);
  }

  const result = [sumOfPlus, sumOfMinus];
  console.log("sumOfMinus: ", sumOfMinus);
  console.log("sumOfPlus: ", sumOfPlus);

  return setDisplay(
    result
      .reduce((a, b) => {
        return a + b;
      })
      .toString()
  );
}
