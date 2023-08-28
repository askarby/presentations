<script lang="ts">
    import type {Presentation} from "./models";
    import Markdown from "./Markdown.svelte";

    export let presentation: Presentation;

    function toProseLanguage(abbreviation: 'da' | 'en'): string {
        switch (abbreviation) {
            case 'da':
                return 'Danish';
            case 'en':
                return 'English';
            default:
                return '?';
        }
    }

    function formatDate(date: Date): string {
        const year = date.toLocaleString("default", {year: "numeric"});
        const month = date.toLocaleString("default", {month: "2-digit"});
        const day = date.toLocaleString("default", {day: "2-digit"});
        return `${year}-${month}-${day}`;
    }
</script>

<header class="flex justify-between items-center">
    <h1 class="text-xl mb-2">{ presentation.name }</h1>
    <p class="text-slate-400">{formatDate(presentation.released)}</p>
</header
>
<div class="mb-2">
    <div class="badge badge-accent">{toProseLanguage(presentation.language)}</div>
    {#each presentation.tags as tag}
        <div class="badge badge-ghost">{tag}</div>
    {/each}
</div>

<Markdown src={presentation.description}/>

<a href={presentation.link} target="_blank" class="btn btn-outline btn-primary w-64 rounded-full my-4 float-right">
    Go To Presentation
</a>