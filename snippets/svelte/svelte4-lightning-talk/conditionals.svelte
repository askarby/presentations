<script>
    let count = 0;
    function increment() {
        count++;
    }
</script>

<button onClick={() => count++}>Click me</button>

{#if count === 1} 
    <p>There is {count} person</p>
{:else if count > 100}
    <p>There are too many persons to count...</p>
{:else}
    <p>There are {count} persons</p>
{/if}
