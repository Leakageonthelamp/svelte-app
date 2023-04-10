<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ITodos } from './types';

	export let count: number;

	const dispatch = createEventDispatcher();

	const getRandomData = async (): Promise<ITodos[]> => {
		const res = await fetch('https://jsonplaceholder.typicode.com/todos');
		const data = await res.json();

		return res.ok ? data.splice(0, 5) : [];
	};

	let name: string = '';
	let isRender = true;
	let promise = getRandomData();
	$: fullName = 'Hello ' + name;
	$: if (name.length > 5) {
		alert('Name is too long');
		name = name.slice(0, 5);
	}

	const submit = () => dispatch('submit', { name });
</script>

<div class="display-container">
	<div class="display">
		{name} | {count || 0} | {fullName}
	</div>
	<div class="flex items-center mt-4">
		<input bind:value={name} type="text" />
		<button class="mx-2 flex-grow" on:click={() => submit()}>Emit</button>
	</div>

	<div class="flex items-center my-4">
		<input bind:checked={isRender} type="checkbox" />
		{#if isRender}
			<p>Render this true</p>
		{:else}
			<p>Render this false</p>
		{/if}
	</div>

	<div class="flex justify-center mb-4">
		<button on:click={() => getRandomData()}>Woops!</button>
	</div>
	{#await promise}
		<p>Loading...</p>
	{:then todos}
		{#each todos as data (`data-${data.id}`)}
			<div>[{data.id}] Title: {data.title} Completed: {data.completed}</div>
		{/each}
	{/await}
</div>

<style lang="scss" scoped>
	.display {
		@apply border-4 rounded-full p-4 mt-10 text-4xl text-center;
	}
	input {
		@apply border rounded-full p-4 bg-gray-200 text-4xl text-center;
	}
	button {
		@apply border rounded-full p-4 bg-gray-200 text-2xl text-center;
	}
</style>
