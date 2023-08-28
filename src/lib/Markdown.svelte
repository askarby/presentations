<script lang="ts">
    import { marked } from 'marked'

    export let src: string = '';
</script>

<div>{@html marked(src)}</div>
