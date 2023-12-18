<script lang="ts">
	import { counter } from '$lib/counter';

	function incrementCount() {
		counter.update((n) => n + 1);
	}

	let count = 0;

	counter.subscribe((n) => {
		count = n;
	});
</script>

<div style="display: flex; flex-direction: column;  align-items: center; gap: 1rem;">
	<button style="font-size: 2rem;" on:click={incrementCount}>
		Clicked {count}
		{count === 1 ? 'time' : 'times'}
	</button>
	<a href="/globalState/viewer">View State</a>
	<a href="/">Index</a>
</div>
