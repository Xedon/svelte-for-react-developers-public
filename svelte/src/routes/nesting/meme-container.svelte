<div class="container">
	<slot name="header" />
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
	.content {
		padding-top: 1rem;
	}
</style>
