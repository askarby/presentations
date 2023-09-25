<!-- Manual.svelte -->
<script>
    import { onDestroy } from 'svelte';
    import { writable } from 'svelte/store';
    
    const name = writable('Sherlock Holmes');
    let display;

    const unsubscribe = name.subscribe(value => display = value);

    onDestroy(unsubscribe);
</script>

<p>The name is {display}</p>
<button onClick={() => name.set('John Watson')}>Change name</button>

<!-- Automatic.svelte -->
<script>
    import { writable } from 'svelte/store';
    
    const name = writable('Sherlock Holmes');
</script>

<p>The name is {$name}</p>
<button onClick={() => $name = 'John Watson'}>Change name</button>