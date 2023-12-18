<script lang="ts">
	let online = false;
</script>

<svelte:window
	bind:online
	on:contextmenu={(e) => {
		alert('No Context Menu allowed!');
		e.preventDefault();
	}}
/>

<svelte:head>
	<title>DOM</title>
	<meta name="description" content="DOM" />
</svelte:head>

<div style="display: flex; flex-direction: column;  align-items: center; gap: 1rem;">
	<div>
		<label for="online">Online:</label>
		<input id="online" type="checkbox" bind:checked={online} readonly />
	</div>
</div>
