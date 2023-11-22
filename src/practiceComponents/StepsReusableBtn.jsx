/** @format */

import { useState } from "react";

import "../styles/StepsReusableBtn.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function StepsReusableBtn() {
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const goNext = () => {
    if (count < 3) setCount((c) => c + 1);
  };

  const goPrev = () => {
    if (count > 1) setCount((c) => c - 1);
  };

  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={count >= 1 ? "active" : ""}>1</div>
            <div className={count >= 2 ? "active" : ""}>2</div>
            <div className={count >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage count={count}>
            {" "}
            <span>{messages[count - 1]}</span>
          </StepMessage>
          <div className="buttons">
            <Button textColor={"#fff"} bgColor={"#7950f2"} onClick={goPrev}>
              <span>{"<--"}</span>Previous
            </Button>

            <Button textColor={"#fff"} bgColor={"#7950f2"} onClick={goNext}>
              Next<span>{"-->"}</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function StepMessage({ count, children }) {
  return (
    <div className="message">
      <h3>Step {count}:</h3>
      {children}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default StepsReusableBtn;
