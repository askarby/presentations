export interface Presentation {
    name: string;
    released: Date;
    language: 'da' | 'en';
    tags: string[];
    description: string;
    link: string;
}
