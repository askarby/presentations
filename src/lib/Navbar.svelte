<script lang="ts">
    import type {Topic} from "./models";
    import {reveal} from "./utils";

    export let topics: Topic[] = [];

    let yPosition = 0;

    const top = {
        container: `absolute top-0`,
        navbar: ''
    }
    const floating = {
        container: `sticky inline-block top-2 px-2`,
        navbar: 'shadow-md rounded-md opacity-90'
    };

    let positioning = top
    $: positioning = yPosition > 50 ? floating : top;
</script>

<svelte:window bind:scrollY={yPosition}/>

<div class="w-screen {positioning.container} z-10">
    <div class="navbar bg-base-100 drop-shadow-md transition-all duration-200 {positioning.navbar}">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl" href="/">Presentations <small class="badge text-slate-500">by
                Skarby</small></a>
        </div>
        <div class="flex-none invisible md:visible">
            {#each topics as topic}
                <button class="btn btn-square btn-ghost p-1" on:click={() => reveal(topic.name)}>
                    <img src={`/${topic.name.toLowerCase()}.svg`} class="logo h-full {topic.name}" alt="{topic.name} Logo"/>
                </button>
            {/each}
        </div>
    </div>
</div>