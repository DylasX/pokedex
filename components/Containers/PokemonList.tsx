import React, { useState, useEffect } from 'react';
import { getAllPokemons } from '../../services/api/pokedex';
import Card from '../../components/Cards/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { pokemonPartial, listPokemon } from '../../interfaces/';
import { AxiosResponse } from 'axios';
import PropTypes from 'prop-types';
const maxPokemon = process.env.NEXT_PUBLIC_MAX_POKEMON || 1118;

export default function PokemonList({
    data,
    changeSelectedPokemon,
}: {
    data: pokemonPartial[];
    changeSelectedPokemon(id: string): void;
}): JSX.Element {
    const [allPokemons, setAllPokemons] = useState<pokemonPartial[]>(data);
    const [hasMore, setHasMore] = useState(true);

    const fetchMorePokemon = async () => {
        try {
            const res: AxiosResponse<listPokemon> = await getAllPokemons({ offset: allPokemons.length });
            if (res && res.data?.results) {
                res.data?.results.forEach((el, index) => {
                    el.image = `https://pokeres.bastionbot.org/images/pokemon/${index + allPokemons.length + 1}.png`;
                });
                setAllPokemons([...allPokemons, ...res.data.results]);
            }
        } catch (error) {}
    };

    useEffect(() => {
        if (allPokemons.length === maxPokemon) {
            setHasMore(false);
        }
    }, [allPokemons]);

    return (
        <InfiniteScroll
            dataLength={allPokemons.length} //This is important field to render the next data
            next={fetchMorePokemon}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={''}
        >
            <div className="grid md:grid-cols-4 sm:grid-cols-1">
                {allPokemons &&
                    allPokemons.map((pokemon, index) => (
                        <Card
                            pokemon={pokemon}
                            index={index + 1}
                            key={index}
                            changeSelectedPokemon={changeSelectedPokemon}
                        ></Card>
                    ))}
            </div>
        </InfiniteScroll>
    );
}

PokemonList.propTypes = {
    data: PropTypes.array.isRequired,
    changeSelectedPokemon: PropTypes.func.isRequired,
};
