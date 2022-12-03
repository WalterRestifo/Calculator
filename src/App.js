import "./App.css";
import styled from "styled-components";
import { useState } from "react";

const calculatorButtonsWithNormalBehavior = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function App() {
  const [display, setDisplay] = useState("");

  function handleClick(number) {
    return setDisplay(display + number);
  }

  function handleZero() {
    if (display === "" || display.charAt(display.length - 1) === "+") {
      return;
    } else {
      return setDisplay(display + 0);
    }
  }

  function handleAdd() {
    if (display.charAt(display.length - 1) === "+") {
      return;
    } else if (display.charAt(display.length - 1) === "-") {
      return;
    } else if (display.length === 0) {
      return;
    } else {
      return setDisplay(display + "+");
    }
  }

  function handleSub() {
    if (display.charAt(display.length - 1) === "+") {
      return;
    } else if (display.charAt(display.length - 1) === "-") {
      return;
    } else if (display.length === 0) {
      return;
    } else {
      return setDisplay(display + "-");
    }
  }

  function handleCalculate() {
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

  function handleDelete() {
    return setDisplay("");
  }

  return (
    <>
      <StyledHeader>
        <p>Calculator</p>
      </StyledHeader>
      <StyledBody>
        <StyledInput
          type={"text"}
          minLength="10"
          value={display}
          placeholder="0"
          readOnly
        />

        {calculatorButtonsWithNormalBehavior.map((numberOfTheButton) => {
          return (
            <button
              key={numberOfTheButton}
              onClick={() => handleClick(numberOfTheButton)}
            >
              {numberOfTheButton}
            </button>
          );
        })}
        <button onClick={handleZero}>0</button>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSub}>-</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleDelete}>Delete</button>
      </StyledBody>
    </>
  );
}

const StyledBody = styled.body`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const StyledInput = styled.input`
  grid-column: span 3;
`;
const StyledHeader = styled.header`
  padding-left: 1rem;
  padding-right: 1rem;
`;
