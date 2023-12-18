import { Link } from "react-router-dom";
import { useCounter } from "./state";

export const GlobalStateViewer = () => {
  const { count } = useCounter();

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
        <div>
          You Clicked: {count}
          {count === 1 ? "time" : "times"}
        </div>

        <Link to="/globalState">Go Back</Link>
      </div>
    </div>
  );
};
