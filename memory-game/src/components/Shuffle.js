import React from "react";

function shuffleCards(array) {
    let length=array.length;
    for (let i=length; i>0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        let currentIndex = i - 1;
        swap(array, currIndex, randomIndex)
    }
    return array
}

export default shuffleCards