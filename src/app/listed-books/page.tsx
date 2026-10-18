'use client'
import { IBook } from '@/books.type';
import { BooksContext } from '@/BooksContent/BooksContent';
import BookCard from '@/components/shared/homepage/BookCard';
import React, { useContext } from 'react';

const ListedBooks = () => {
    const { readBooks, wishlist } = useContext(BooksContext);
    console.log(readBooks, wishlist, "readBooks", "wishlist")
    return (
        <div className='container mx-auto py-[0px]'>
            <h2 className='my-7 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center'>Listed Books</h2>

            <h2 >
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-border">
                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Read Books" />
                    <div className="tab-content border-base-300 bg-base-100 p-10">
                        {
                            readBooks.length > 0? (readBooks.map((book:IBook)=>{
                                return <BookCard key={book.bookId} book={book}/>
                              })
                            ):(<p className='text-center text-lg font-semibold'>No Read Books Found</p>)  
                        }
                        </div>

                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Whislist Books" defaultChecked />
                    <div className="tab-content border-base-300 bg-base-100 p-10"> 
                       {
                            readBooks.length > 0? (readBooks.map((book:IBook)=>{
                                return <BookCard key={book.bookId} book={book}/>
                              })
                            ):(<p className='text-center text-lg font-semibold'>No Read Books Found</p>)  
                        }
                        </div>


                </div>
            </h2>
        </div>
    );
};

export default ListedBooks;