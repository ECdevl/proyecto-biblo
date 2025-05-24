import React, {useState} from 'react';
import './BookMore.css';

function BookMore({ book, onClose }) {
  const [showBackImage, setShowBackImage] = useState(false);

  function changeImage() {
    setShowBackImage(!showBackImage);
    if (showBackImage) {
      document.getElementById("imagem").src = URL.createObjectURL(book.coverImage);
    }
    else {
      document.getElementById("imagem").src = URL.createObjectURL(book.backImage);
    }

  }

  return (
    <div id="more" className="overlay">
      <div id="morePanel">
        <button id="close" onClick={onClose}>X</button>

       <div id="images" onClick={changeImage}>
        <img id="imagem" src={URL.createObjectURL(book.coverImage)} ></img>
       </div>
       <div id="info">
        <h1>{book.name}</h1>
        <h2>{book.author}</h2>
        <h3>{book.genre}</h3>
        <p>{book.description}</p>
        {book.availability === true ? (<button>Reservar</button>) : (<button disabled>Reservado</button>)}
        
       </div>

      </div>

    </div>
  );
}

export default BookMore;