export type Pokemon = {
	name: string;
	weight: number;
	sprites: {
		front_default: string;
	};
};

export const fetchPokemon = async (id: string): Promise<Pokemon> => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

	if (!response.ok) {
		throw response.statusText;
	}

	return response.json();
};
