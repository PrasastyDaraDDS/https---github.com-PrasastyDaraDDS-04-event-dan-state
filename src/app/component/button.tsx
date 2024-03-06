// ./component/button.js

import React from 'react';

export default function Tombol_1() {
    function handleClick(){
        alert("Tombol telah ditekan!!!");
    }
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        onClick={handleClick}
        >

            Ini Tombol
        </button>
    );
}

export function Tombol_2({ isiPesan, namaTombol }) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded" 
        onClick={() => alert(isiPesan)}>
            {namaTombol}
        </button>
    );
}

export function Tombol_3({isiPesan, namaTombol}){
    return(
        <button className="bg-green-400 hover:bg-blue-700 text-white p-2 rounded m-2" 
        onClick={(e) => {
            e.stopPropagation();
            alert(isiPesan)
        }
    }></button>
    )
}

