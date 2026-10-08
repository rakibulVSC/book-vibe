import { IBook } from '@/books.type';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps{
    params:Promise<{
        Id:string;
    }>;
}
const getBooks = async () => {
    const res = await fetch('http://localhost:3000/booksData.json');
    const data = await res.json();
    return data;
};
const BookDetailPage = async({params}:IBookDetailsPageProps) => {
const { Id } = await params;
const booksData=await getBooks();
const book=booksData.find((book:IBook)=>book.bookId===Number(Id)) as IBook

    return (
       <div className="container mx-auto px-4 py-10">
  <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden">

    {/* Book Image */}
    <figure className="lg:w-1/2 bg-base-200 p-6">
      <Image
        width={800}
        height={600}
        src={book.image}
        alt={book.bookName}
        className="w-full h-[500px] object-contain rounded-2xl"
      />
    </figure>

    {/* Book Details */}
    <div className="card-body lg:w-1/2 justify-center p-8 lg:p-12">

      <div>
        <span className="badge badge-primary badge-outline mb-4">
          {book.category}
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-3">
          {book.bookName}
        </h2>

        <p className="text-lg text-base-content/60 mb-6">
          by <span className="font-semibold text-base-content">{book.author}</span>
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-2xl">★</span>
          <span className="text-xl font-bold">{book.rating}</span>
        </div>

        <span className="text-base-content/40">|</span>

        <span className="text-base-content/60">
          {book.totalPages} Pages
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="badge badge-lg bg-base-200 border-none px-4 py-3"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Review */}
      <div className="mb-7">
        <h3 className="text-xl font-bold mb-2">
          About the Book
        </h3>

        <p className="text-base-content/70 leading-7 line-clamp-5">
          {book.review}
        </p>
      </div>

      {/* Book Information */}
      <div className="grid grid-cols-2 gap-4 mb-8">

        <div className="bg-base-200 rounded-xl p-4">
          <p className="text-sm text-base-content/50">
            Publisher
          </p>
          <p className="font-semibold mt-1">
            {book.publisher}
          </p>
        </div>

        <div className="bg-base-200 rounded-xl p-4">
          <p className="text-sm text-base-content/50">
            Published
          </p>
          <p className="font-semibold mt-1">
            {book.yearOfPublishing}
          </p>
        </div>

      </div>

      {/* Button */}
      <div className="card-actions">
        <button className="btn btn-primary btn-lg px-8">
          Read Book
        </button>

        <button className="btn btn-outline btn-lg">
          Add to Wishlist
        </button>
      </div>

    </div>
  </div>
</div>
    );
};

export default BookDetailPage;