import { Link } from "react-router-dom";
import { RandomPokemonLink } from "./dataFetching/randomPokemonLink";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <nav className="nav-content">
        <Link to="/templating">Templating </Link>
        <Link to="/css">CSS </Link>
        <Link to="/debugging">Debugging </Link>
        <Link to="/props">Props </Link>
        <Link to="/nesting">Nesting </Link>
        <Link to="/reactivity">Reactivity </Link>
        <Link to="/globalState">Global State </Link>
        <RandomPokemonLink />
        <Link to="/dom">DOM </Link>
      </nav>
    </div>
  );
}

export default App;
