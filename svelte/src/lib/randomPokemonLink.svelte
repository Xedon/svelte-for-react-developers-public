<script lang="ts">
	let id: string;
	$: id = (Math.random() * 1000).toFixed();
</script>

<a href={`/dataFetching/${id}`}> Random Pokemon </a>
