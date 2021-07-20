import React, { Fragment } from 'react';
import { pokemonPartial } from '../../interfaces/';
import PropTypes from 'prop-types';

const Card = ({
    pokemon,
    index,
    changeSelectedPokemon,
}: {
    pokemon: pokemonPartial;
    index: number;
    changeSelectedPokemon(id: string): void;
}): JSX.Element => {
    return (
        <Fragment>
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-8  mb-2 card mx-auto w-full">
                <img src="img/logo.png" width="50px" className="" alt="" />

                <div className="mt-4">
                    <img src={pokemon.image} width="200px" className="mx-auto" alt="" />
                    <div>
                        <h2 className="text-gray-800 text-3xl font-semibold capitalize">
                            {index + '. ' + pokemon.name}
                        </h2>
                    </div>
                    <a
                        href="#"
                        className="text-xl font-medium text-red-500"
                        onClick={() => changeSelectedPokemon(index.toString())}
                    >
                        Details
                    </a>
                </div>
            </div>
        </Fragment>
    );
};

Card.propTypes = {
    pokemon: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    changeSelectedPokemon: PropTypes.func.isRequired,
};

export default Card;
