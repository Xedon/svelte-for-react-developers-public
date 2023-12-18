import { useState } from "react";

export const Reactivity = () => {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const sum = num1 + num2; // Could do this here, better would be inside a useMemo

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div>
        <button style={{ fontSize: "2rem" }} onClick={handleClick}>
          Clicked {count} {count === 1 ? "time" : "times"}
        </button>
      </div>
      <div>
        <label htmlFor="num1">Input 1:</label>
        <input
          type="number"
          id="num1"
          name="num1"
          value={num1}
          onChange={(event) => setNum1(Number.parseFloat(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="num2">Input 2:</label>
        <input
          type="number"
          id="num2"
          name="num2"
          value={num2}
          onChange={(event) => setNum2(Number.parseFloat(event.target.value))}
        />
      </div>
      <div>
        <p>
          {num1}+{num2}={sum}
        </p>
      </div>
    </div>
  );
};
