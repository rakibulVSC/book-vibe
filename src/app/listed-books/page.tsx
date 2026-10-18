'use client'
import { BooksContext } from '@/BooksContent/BooksContent';
import React, { useContext } from 'react';

const ListedBooks = () => {
    const {readBooks}=useContext(BooksContext);
    console.log(readBooks)
    return (
        <div>
            
            <h2>Listed Books</h2>
        </div>
    );
};

export default ListedBooks;