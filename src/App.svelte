<script lang="ts">
    import Hero from "./lib/Hero.svelte";
    import Navbar from "./lib/Navbar.svelte";

    import { presentationsStore } from './lib/stores/presentations.store';
    import TopicListing from "./lib/TopicListing.svelte";
    import Footer from "./lib/Footer.svelte";

    const presentations = presentationsStore();
    presentations.load();
</script>

<main>
    {#if $presentations.loading}
        <p>loading...</p>
    {:else if $presentations.data}
        <Navbar topics={$presentations.data} />
        <Hero topics={$presentations.data} />

        {#each $presentations.data as topic}
            <TopicListing {topic} />
        {/each}

        <Footer />
    {:else if $presentations.error}
        <p>{$presentations.error?.message ?? 'Unknown error'}</p>
    {/if}
</main>