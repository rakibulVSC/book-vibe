"use client";
import { IBook } from '@/books.type';
import { BooksContext } from '@/BooksContent/BooksContent';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton= ({book}:{book:IBook}) => {
  const {wishlist,setWishlist}=useContext(BooksContext);
  
    const handleAddWishList=()=>{
setWishlist([...wishlist,book]);
toast.success(`You have added "${book.bookName}" to your wishlist`)
    }
    return (
        <div>
             <button
  className="btn btn-primary btn-lg px-8"
  onClick={handleAddWishList}
>
Add to WishList
</button>
        </div>
    );
};

export default WishlistButton;