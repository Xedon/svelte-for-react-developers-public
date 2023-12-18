<script lang="ts">
	const pets = ['Fluffy', 'Buddy', 'Luna'];
</script>

<div>
	<div>{pets.length - 1} Pets</div>

	{#each pets as pet}
		{#if !pet.startsWith('B')}
			<div>{pet}</div>
		{/if}
	{/each}
</div>
