export function sumPlusNumbers(display) {
  const plusStrings = display.match(/\+\d+/g);
  let plusNumbers = [0, 0];
  if (plusStrings) {
    plusNumbers = plusStrings.map((string) => parseInt(string));
  }
  const sumOfPlusNumbers = plusNumbers.reduce((a, b) => a + b);
  return sumOfPlusNumbers;
}

export function sumMinusNumbers(display) {
  const minusStrings = display.match(/-\d+/g);
  let minusNumbers = [0, 0];
  if (minusStrings) {
    minusNumbers = minusStrings.map((string) => parseInt(string));
  }
  const sumOfMinusNumbers = minusNumbers.reduce((a, b) => a + b);
  return sumOfMinusNumbers;
}

export function recognizeFirstNumber(display) {
  const firstString = display.match(/^\d+/g);

  let firstNumber = 0;

  if (firstString) {
    firstNumber = parseInt(firstString);
  }
  return firstNumber;
}

export function checkIfDisplayable(display) {
  if (
    display.charAt(display.length - 1) === "+" ||
    display.charAt(display.length - 1) === "-" ||
    display.length === 0
  ) {
    return false;
  } else return true;
}
