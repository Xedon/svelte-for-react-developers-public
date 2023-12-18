<script lang="ts">
	import { page } from '$app/stores';
	import Pokemon from '$lib/pokemon.svelte';
	import RandomPokemonLink from '$lib/randomPokemonLink.svelte';
	let id: string;
	page.subscribe((value) => (id = value.params.id));
</script>

<div style="display: flex; flex-direction: column;  align-items: center; gap: 1rem;">
	<Pokemon {id} />
	{#key id}
		<RandomPokemonLink />
	{/key}
</div>
