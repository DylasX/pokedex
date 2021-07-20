export interface listPokemon {
    count: number;
    next: string;
    previous: string;
    results: [
        {
            name: string;
            url: string;
            image: string;
        },
    ];
}
