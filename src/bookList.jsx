import React, { useState } from 'react';
import BookCard from './BookCard';
import "./BookList.css"
function BookList({ books }) {
    return(

        <div id="book-list">
            {books.length === 0 ? (<p>No hay libros</p>) : (
            <ul id='book-list-ul'>
                {books.map((book, index) => (
                    <li key={index}>
                        <BookCard book={book} />
                    </li>
                ))}
            </ul>
            )}
        </div>
            )}
export default BookList;

    