<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}

	let num1 = 0;
	let num2 = 0;
	let sum = 0;

	$: sum = num1 + num2;
</script>

<div style="display: flex; flex-direction: column;  align-items: center; gap: 1rem;">
	<button style="font-size: 2rem;" on:click={handleClick}>
		Clicked {count}
		{count === 1 ? 'time' : 'times'}
	</button>

	<div>
		<label for="num1">Num 1:</label>
		<input type="number" id="num1" name="num1" bind:value={num1} />
	</div>
	<div>
		<label for="num2">Num 2:</label>
		<input type="number" id="num2" name="num2" bind:value={num2} />
	</div>
	<div>
		<p>
			{num1}+{num2}={sum}
		</p>
	</div>
</div>
