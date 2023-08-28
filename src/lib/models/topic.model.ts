import type {Presentation} from "./presentation.model";

export interface Topic {
    name: string;
    description: string;
    color: string;
    presentations: Presentation[];
}
