<script lang="ts">
    import type {Topic} from "./models";
    import {reveal} from "./utils";

    export let topics: Topic[];
</script>

<section class="top h-screen w-screen bg-cover bg-center relative">
    <div class="container mx-auto">
        <div class="absolute bottom-[20%] text-white right-[20%]">
            <h1 class="text-4xl mb-4">Presentations <small class="text-xl text-amber-200">(by Skarby)</small></h1>
            <p>This site contains all the presentations that I've given (that I've saved, so not that many).</p>
            <p class="mb-4">Please click upon the topics (that's the icons) below, or scroll down...</p>

            <div>
                {#each topics as topic}
                    <button class="btn-xl btn-square btn-ghost p-1 mr-2" on:click={() => reveal(topic.name)}>
                        <img src={`/${topic.name.toLowerCase()}.svg`} class="h-full {topic.name}" alt="{topic.name} Logo"/>
                    </button>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .top {
        background-image: url('/background.jpeg');
    }
</style>
