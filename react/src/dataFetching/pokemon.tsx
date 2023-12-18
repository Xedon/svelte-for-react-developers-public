import { FunctionComponent, useEffect, useState } from "react";
import { Pokemon as PokemonType, fetchPokemon } from "./pokeClient";

export const Pokemon: FunctionComponent<{ id: string }> = ({ id }) => {
  const [pokemon, setPokemon] = useState<PokemonType | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setError(false);
    setPokemon(undefined);
    fetchPokemon(id)
      .then((data) => setPokemon(data))
      .catch(() => setError(true));
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {error && <div>Woops something went wrong</div>}
      {pokemon && (
        <>
          <img
            height={200}
            width={200}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <div>
            Name: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </div>
          <div>Weight: {pokemon.weight}</div>
        </>
      )}
      {!error && !pokemon && (
        <div style={{ minHeight: "236px" }}>
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};
