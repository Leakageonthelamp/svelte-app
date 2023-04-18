<script lang="ts">
	import DisplayCount from '$components/DisplayCount.svelte';
	import { time, elapsed } from '$stores/main.store';

	let isFact: boolean = false;

	const redRender = () => `<div style="color: red">Red Render</div>`;
	const blueRender = () => `<div style="color: blue">Blue Render</div>`;

	const formatter = new Intl.DateTimeFormat('en-US', {
		timeZone: 'America/New_York',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: false
	});

	const handleSubmit = (event: CustomEvent<{ name: string }>) => {
		console.log('value', event.detail.name);
	};
</script>

<svelte:head><title>Playground</title></svelte:head>

<div class="playground-container">
	{@html isFact ? redRender() : blueRender()}
	<button on:click={() => (isFact = !isFact)}>Change</button>
	<DisplayCount count={0} on:submit={handleSubmit} />

	<div class="text-2xl mt-6">
		{formatter.format($time)} | {$elapsed}
		{$elapsed === 1 ? 'second' : 'seconds'}
	</div>
</div>

<style lang="scss" scoped>
	.playground-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;

		button {
			margin-top: 1rem;
			padding: 1rem;
			border: 1px solid #000;
			border-radius: 24px;
		}
	}
</style>
