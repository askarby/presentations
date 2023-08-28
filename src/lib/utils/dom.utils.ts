export function reveal(id: string) {
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
}