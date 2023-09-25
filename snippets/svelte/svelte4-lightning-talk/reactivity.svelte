<script>
    let count = 0;
    let doubled = 0;

    $: doubled = count * 2;
</script>

<button onClick={() => count++}>Click me</button>
<p>Button is clicked {count} times (doubled, it's {doubled})</p>