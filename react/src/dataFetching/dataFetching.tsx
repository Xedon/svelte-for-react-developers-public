import { Pokemon } from "./pokemon";
import { useParams } from "react-router-dom";
import { RandomPokemonLink } from "./randomPokemonLink";

export const DataFetching = () => {
  const { id } = useParams();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Pokemon id={id ?? "1"} />

      <RandomPokemonLink />
    </div>
  );
};
