import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import { sumPlusNumbers } from "./lib/calculateFunctions";
import { sumMinusNumbers } from "./lib/calculateFunctions";
import { recognizeFirstNumber } from "./lib/calculateFunctions";
import { checkIfDisplayable } from "./lib/calculateFunctions";

const calculatorButtonsWithNormalBehavior = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function App() {
  const [display, setDisplay] = useState("");

  function handleClick(number) {
    setDisplay(display + number);
    return;
  }

  function handleZero() {
    checkIfDisplayable(display) && setDisplay(display + 0);
    return;
  }

  function handleAdd() {
    checkIfDisplayable(display) && setDisplay(display + "+");
    return;
  }

  function handleSub() {
    checkIfDisplayable(display) && setDisplay(display + "-");
    return;
  }

  function handleCalculate() {
    const result = [
      recognizeFirstNumber(display),
      sumPlusNumbers(display),
      sumMinusNumbers(display),
    ];
    setDisplay(result.reduce((a, b) => a + b).toString());
    return;
  }

  function handleDelete() {
    setDisplay("");
    return;
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
