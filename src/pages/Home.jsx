import React, {useEffect} from "react";
import "./Home.css"
import BookList from "../bookList";



function Home(){
    const [books, setBooks] = useState([]); // Estado compartido para los libros

    const handleAddBook = (book) => {
      setBooks([...books, book]); // Agregar un libro a la lista
    };

    return(
        <div id="homediv">
            <h1>Bienvenido a la bibloteca</h1>
            <div id="historia">
                <p>La Biblioteca Popular Juan de Dios Escobar fue fundada el 30 de octubre de 1910. Lleva el nombre de un distinguido educador chileno, de destacada actuación en nuestra comunidad. El edificio principal data de 1939 y cuenta con un salón de usos múltiples inaugurado en 1996. Se ofrecen servicios de préstamo de libros y se llevan a cabo diversas actividades culturales, con el fin de fomentar la lectura y la difusión del conocimiento en general</p><br/> 
                <p id="hs">Horarios de atencion: de <span>9</span> a <span>12</span> hs</p>
            </div>
            <div id="imagenes">
            <img src="src/assets/intro.jpg"></img>
            <img src="src/assets/download.jpg"></img>
            <img src="src/assets/interior.jpg"></img>
            </div>
            <h2>Explora nuestra coleccion de libros</h2>
            <BookList books={books}/>
        </div>
    )
}

export default Home; 