<script lang="ts">
	export let headline: string;
</script>

<div class="container">
	<h2 class="header">{headline}</h2>
	<div>Your favorite Meme?</div>
	<slot class="content" />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
	.header {
		font-weight: 800;
	}
	.content {
		padding-top: 1rem;
	}
</style>
