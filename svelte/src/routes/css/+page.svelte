<script lang="ts">
	const pets = ['Fluffy', 'Buddy', 'Luna'];
</script>

<div class="content">
	<div>{pets.length - 1} Pets</div>
	<div class="pet-content">
		{#each pets as pet}
			{#if !pet.startsWith('B')}
				<div style="--pet-color: #{Math.floor(Math.random() * 16777215).toString(16)}">{pet}</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.pet-content {
		display: flex;
	}
	.pet-content div {
		margin-right: 10px;
		color: var(--pet-color);
	}
</style>
