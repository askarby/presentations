<script>
    let members = [];
    function load() {
        members.push('John', 'Paul', 'George', 'Ringo');
    }
</script>

<button onClick={load}>Load members</button>

{#each members as member} 
    <p>The 4 membes that are known as The Beatles are: {members.join(', ')}</p>
{:else}
    <p>Please click the "Load members" button...</p>
{/each}
