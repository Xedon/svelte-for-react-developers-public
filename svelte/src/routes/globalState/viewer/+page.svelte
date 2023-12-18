<script lang="ts">
	import { counter } from '$lib/counter';

	let count = 0;

	counter.subscribe((n) => {
		count = n;
	});
</script>

<div style="display: flex; flex-direction: column;  align-items: center; gap: 1rem;">
	<div>
		You Clicked: {count}
		{count === 1 ? 'time' : 'times'}
	</div>

	<a href="/globalState">Go Back</a>
</div>
