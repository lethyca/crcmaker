import React from 'react';

import CardTypes from '../constants/cardtypes';


var Card = (props) => {
    let data = props.data;

    let type = '';

    if (data.type == CardTypes.ABSTRACT) {
        type = 'Abstract';
    }

    if (data.type == CardTypes.INTERFACE) {
        type = 'Interface';
    }

    return (
        <div className="card">
            <header className='card__header'>
                <span className='card__header__type'>{type}</span>
                <span className='card__header__superclass'>{data.super}</span>
                <div className='card__header__class'>{data.name}</div>
                <span className='card__header__subclass'>{data.sub}</span>
            </header>

            <section className='card__contents'>
                <section className='card__contents__responsibilities'>
                    { data.responsibilities !== '' &&
                        <ul>
                            { data.responsibilities.split('\n').map((item, i) =>
                                <li key={i}>{item}</li>
                            ) }
                        </ul>
                    }
                </section>

                <section className='card__contents__collaborators'>
                    { data.collaborators !== '' &&
                        <ul>
                            { data.collaborators.split('\n').map((item, i) =>
                                <li key={i}>{item}</li>
                            ) }
                        </ul>
                    }
                </section>
            </section>
        </div>
    );
};

export default Card;
