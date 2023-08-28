export interface JsonPresentation {
    name: string;
    released: string;
    language: string;
    tags: string[];
    description: string[];
    link: string;
}

export interface JsonTopic {
    name: string;
    description: string;
    color: string;
    presentations: JsonPresentation[];
}

export interface JsonConfig {
    [key: string]: JsonTopic;
}