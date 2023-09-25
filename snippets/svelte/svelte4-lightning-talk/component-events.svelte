<!-- Button.svelte -->
<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function dispatchClick() { dispatch('clicked');}
</script>

<button on:click={dispatchClick}>Click me</button>

<!-- Counter.svelte -->
<script>
	import Button from './button.svelte';
    let count = 0;
</script>

<Button on:clicked={() => count++} />
<p>Button is clicked {count} times</p>
