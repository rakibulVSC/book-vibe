import React from 'react';




import { IBook } from "@/books.type";
import BookCard from '@/components/shared/homepage/BookCard';
type BookType = {
    bookId: number;
    bookName: string;
    author: string;
    image: string;
    review: string;
    totalPages: number;
    rating: number;
    category: string;
    tags: string[];
    publisher: string;
    yearOfPublishing: number;
};

const getBooks = async () => {
    const res = await fetch('http://localhost:3000/booksData.json');
    const data = await res.json();
    return data;
};

const Books = async () => {
    const booksData: BookType[] = await getBooks();

    console.log(booksData);

    return (
        <section className="container mx-auto my-[70px]">
            <h4 className="text-green-300 font-bold text-center">Our Collection</h4>
            <h2 className="text-4xl font-bold mt-2 text-center">Explore Listed Books</h2>
             <p className='mx-auto  max-w-2xl text-slate-500 text-center mb-8 mt-4'>Discover amazing stories,timeless classics,ans inspiring books from talented authors.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {booksData.map((book:IBook,ind:number) => {
                    return <BookCard key={ind} book={book} />
                })}

            </div>
        </section>
    );
};

export default Books;