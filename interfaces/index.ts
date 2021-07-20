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

export interface detailPokemon {
    abilities: [];
    base_experience: number;
    forms: [];
    game_indices: [];
    height: number;
    held_items: [];
    id: number;
    image: string;
    is_default: boolean;
    location_area_encounters: string;
    moves: [];
    name: string;
    order: number;
    past_types: [];
    species: Record<string, unknown>;
    sprites: Record<string, unknown>;
    stats: [];
    types: [];
    weight: number;
}

export interface pokemonPartial {
    name: string;
    url: string;
    image: string;
}
