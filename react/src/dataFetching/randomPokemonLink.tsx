import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const RandomPokemonLink: FunctionComponent = () => (
  <Link to={`/dataFetching/${(Math.random() * 1000).toFixed()}`}>
    Random Pokemon
  </Link>
);
