<script>
    const promise = fetch.get('<data url>');
</script>

<div>
    {#await promise}
        Loading data, please wait...
    {:then result}
        Data is: {result}
    {:catch cause}
        Encountered error: {cause}
    {/await}
</div>
