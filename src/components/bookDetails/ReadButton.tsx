"use client";
import { IBook } from '@/books.type';
import { BooksContext } from '@/BooksContent/BooksContent';
import React, { useContext } from 'react';

const ReadButton = ({book}:{book:IBook}) => {
  const {readBooks,setReadBooks}=useContext(BooksContext);
  
    const handleReadBook=()=>{
setReadBooks([...readBooks,book]);
alert(`You have read "${book.bookName}"`)
    }
    return (
        <div>
             <button
  className="btn btn-primary btn-lg px-8"
  onClick={handleReadBook}
>
  Read Book
</button>
        </div>
    );
};

export default ReadButton;