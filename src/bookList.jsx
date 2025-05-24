import React, { useState } from 'react';
import BookCard from './BookCard';
import "./BookList.css"
function BookList({ books, quantity, nombre, admin }) {
    if (quantity === undefined) {
        quantity = 3; // Valor por defecto si no se proporciona
    } else if (quantity == "all"){
        quantity = books.length; // Si se pasa "all", mostrar todos los libros
    }
    if (nombre !== undefined) {
        books = books.filter((book) => book.nombre === nombre); // Filtrar libros por género
    }
    if (admin == false){
    return(

        <div id="book-list">
            {books.length === 0 ? (<p>No hay libros</p>) : (
            <ul id='book-list-ul'>
                {books.map((book, index) => ( index < quantity) && (
                    <li key={index}>
                        <BookCard book={book} />
                    </li>
                ))}
            </ul>
            )}
        </div>
            )
        }else { // TODO: Crear un componente BookCardAdmin para poder editar los libros o eliminarlos
            return(
                <div id="book-list" class="container"> 
                <div class="row-15">
                    
                    {books.length === 0 ? (<p>No hay libros</p>) : (
                    <ul id='book-list-ul'>
                        {books.map((book, index) => ( index < quantity) && (
                            <div class="row">
                            <li key={index}>
                                <BookCard book={book} />
                            </li>
                            </div>
                        ))}
                    </ul>
                    )}
                    
                    </div>
                </div>
            )
        }
    }
export default BookList;

    