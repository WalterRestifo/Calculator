import "./App.css";
import styled from "styled-components";
import { useState } from "react";

const calculatorButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default function App() {
  const [display, setDisplay] = useState("");

  function handleClick(number) {
    return setDisplay(display + number);
  }

  function handleCalculate() {
    const arrOfNumbersDividedByPlus = display
      .split("+")
      .map((stringOfANumber) => parseInt(stringOfANumber, 10));

    return setDisplay(arrOfNumbersDividedByPlus.reduce((a, b) => a + b));
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

        {calculatorButtons.map((numberOfTheButton) => {
          return (
            <button
              key={numberOfTheButton}
              onClick={() => handleClick(numberOfTheButton)}
            >
              {numberOfTheButton}
            </button>
          );
        })}
        <button onClick={() => handleClick("+")}>+</button>
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
