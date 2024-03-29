import { useState } from 'react';
import {sculptureList} from '@/app/data/article';

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex(index + 1); // counter index + 1, utk melihat data selanjutnya
    }

    let sculpture =sculptureList[index];

    return (
        <>
          <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"> artikel selanjutnya </button>
        <h2><i>{sculpture.name} </i> oleh {sculpture.artist} </h2>
        <h3>({index + 1} dari {sculpture.lenght}) </h3>
        <img src={sculpture.url} alt={sculpture.alt} />
        <p>
            {sculpture.description}
        </p>
        </>
    )
}