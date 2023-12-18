import { Link } from "react-router-dom";
import { useCounter } from "./state";

export const GlobalState = () => {
  const { count, setCount } = useCounter();

  function handleClick() {
    setCount(count + 1);
  }

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
      <Link to="/globalState/viewer">View State</Link>
      <Link to="/">Back to Index</Link>
    </div>
  );
};
