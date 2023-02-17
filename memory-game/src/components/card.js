import React from 'react';
import classnames from 'classnames';
import stevensShirt from "/Users/tpl1122_17/Techtonica/Techtonica-Assignments/memory-game/src/images/stevensShirt.jpeg";
// import "/Users/tpl1122_17/Techtonica/Techtonica-Assignments/memory-game/src/card.scss"

function Card({ onClick, card, index, isInactive, isFlipped, isDisabled }) {
    const handleClick = () => {
        !isFlipped && !isDisabled && onClick(index);
    };
    return (
        <div className={classnames("card", {
            "is-flipped": isFlipped,
            "is-inactive": isInactive
        })}
            onClick={handleClick}>
            <div className='card-face card-front-face'>
                <img src={stevensShirt} alt='stevens star shirt' />
            </div>
            <div className='card-face card-back-face'>
                <img src={card.image} />
            </div>
        </div>
    );
}

export default Card