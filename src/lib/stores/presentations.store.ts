import type {Writable} from 'svelte/store';
import {writable} from 'svelte/store'
import type {Topic} from "../models";
import type {JsonConfig} from "../models/jsonConfig.model";

const url = '/data/presentations.json'

interface PresentationStore {
    data: Topic[] | undefined;
    loading: boolean;
    error: any | undefined;
}

const empty: PresentationStore = {
    data: undefined,
    loading: false,
    error: false,
};

function extractTopics(data: JsonConfig): Topic[] {
    return Object.values(data).map(topic => ({
        name: topic.name,
        description: topic.description,
        color: topic.color,
        presentations: topic.presentations.map(presentation => ({
            name: presentation.name,
            released: new Date(presentation.released),
            language: presentation.language as 'da' | 'en',
            tags: presentation.tags,
            description: presentation.description.join('\n'),
            link: presentation.link,
        }))
    }));
}

export function presentationsStore(init = empty): Writable<PresentationStore> & { load: () => Promise<void> } {
    const store = writable(init);

    const load = async () => {
        store.update(old => ({...old, loading: true}));
        try {
            const res = await fetch(url);
            const data = extractTopics(await res.json());
            store.update(old => ({...old, data, loading: false}));
        } catch (error) {
            store.update(old => ({...old, error, loading: false}));
        }
    }

    return {...store, load};
}
