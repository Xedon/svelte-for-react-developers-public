<script>
	import RandomPokemonLink from '$lib/randomPokemonLink.svelte';
</script>

<div style="display: flex; flex-direction: column;  align-items: center; gap: 1rem;">
	<nav class="main-nav">
		<a href="/templating">Templating </a>
		<a href="/css">CSS </a>
		<a href="/debugging">Debugging </a>
		<a href="/props">Props </a>
		<a href="/nesting">Nesting </a>
		<a href="/reactivity">Reactivity </a>
		<a href="/globalState">Global State </a>
		<RandomPokemonLink />
		<a href="/dom">Dom </a>
	</nav>
</div>

<style>
	.main-nav {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
