<script lang="ts">
	import { fetchPokemon, type Pokemon } from './pokeClient';
	export let id: string;
	let pokemonFetch: Promise<Pokemon>;
	$: pokemonFetch = fetchPokemon(id);
</script>

<div style="display: flex; flex-direction: column;  align-items: center; ">
	{#if pokemonFetch !== undefined}
		{#await pokemonFetch}
			<div style="min-height: 236px;">
				<h2>Loading...</h2>
			</div>
		{:then pokemon}
			<img height={200} width={200} src={pokemon.sprites.front_default} alt={pokemon.name} />
			<div>
				Name: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
			</div>
			<div>Weight: {pokemon.weight}</div>
		{:catch error}
			<h2>Woops something went wrong</h2>
		{/await}
	{/if}
</div>
