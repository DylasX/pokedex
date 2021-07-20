import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { detailPokemon } from '../../interfaces/';

const CardDetail = ({
    defaultPokemon,
    selectedPokemon,
}: {
    defaultPokemon: detailPokemon;
    selectedPokemon: detailPokemon;
}): JSX.Element => {
    const pokemon = selectedPokemon || defaultPokemon;
    return (
        <Fragment>
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-8  mb-2 card mx-auto w-full">
                <div className="mt-4">
                    <img src={pokemon.image} width="200px" className="mx-auto" alt="" />
                    <div>
                        <h2 className="text-gray-800 text-3xl font-semibold capitalize text-center">{pokemon.name}</h2>
                    </div>
                    <br />
                    <hr />
                </div>
                <div className="grid grid-cols-1 mt-4">
                    <p> Height: {pokemon.height}cms</p>

                    <p> Weight: {pokemon.height}pounds</p>
                </div>
                <hr className="mt-4" />
                <div className="types mt-4">
                    <ul className="text-center">
                        <h4>Types</h4>
                        {pokemon.types.map((data: Record<string, { name: string }>, index) => (
                            <li key={index} className="capitalize">
                                {data.type.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

CardDetail.propTypes = {
    defaultPokemon: PropTypes.object,
    selectedPokemon: PropTypes.object,
};

export default CardDetail;
