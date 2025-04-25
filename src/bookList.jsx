import React, { useState } from 'react';
import BookCard from './BookCard';

function BookList({ books }) {
    return(
        <div className="book-list">
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <BookCard book={book} />
                    </li>
                ))}
            </ul>
        </div>
            )}
export default BookList;

    