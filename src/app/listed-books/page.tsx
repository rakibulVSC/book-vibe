'use client'
import { IBook } from '@/books.type';
import { BooksContext } from '@/BooksContent/BooksContent';
import BookCard from '@/components/shared/homepage/BookCard';
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ListedBooks = () => {
    const { readBooks, wishlist } = useContext(BooksContext);
    console.log(readBooks, wishlist, "readBooks", "wishlist")
    return (
        <div className='container mx-auto py-[20px]'>
            <h2 className='my-7 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center'>Listed Books</h2>

            <h2 >
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-border">
                    <input type="radio" name="my_tabs_2" className="tab" aria-label={`Read Books ${readBooks.length}`} />
                    <div className="tab-content border-base-300 bg-base-100 p-10">
                        {
                            readBooks.length > 0 ? (
                                readBooks.map((book: IBook) => {
                                    return (
                                        <div
                                            key={book.bookId}
                                            className="flex flex-col gap-5 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-md sm:flex-row"
                                        >
                                            {<div className="flex flex-col gap-5 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-md transition hover:shadow-xl sm:flex-row">

                                                {/* Book Cover */}
                                                <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-xl bg-base-200 sm:h-64 sm:w-44">
                                                    <Image
                                                        src={book.image}
                                                        alt={book.bookName}
                                                        fill
                                                        sizes="(max-width: 640px) 100vw, 176px"
                                                        className="object-contain"
                                                    />
                                                </div>

                                                {/* Book Details */}
                                                <div className="flex min-w-0 flex-1 flex-col justify-between gap-5">

                                                    <div className="space-y-3">
                                                        <div className="flex items-center justify-between gap-3">
                                                            <span className="badge badge-success badge-outline">
                                                                {book.category}
                                                            </span>

                                                            <span className="whitespace-nowrap font-semibold text-amber-500">
                                                                ★ {book.rating}
                                                            </span>
                                                        </div>

                                                        <div>
                                                            <h2 className="text-2xl font-bold">
                                                                {book.bookName}
                                                            </h2>
                                                            <p className="mt-1 text-sm text-base-content/60">
                                                                By {book.author}
                                                            </p>
                                                        </div>

                                                        <p className="text-sm leading-7 text-base-content/75">
                                                            {book.review}
                                                        </p>

                                                        <div className="flex flex-wrap gap-2">
                                                            {book.tags.map((tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className="rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        <div className="flex flex-wrap justify-between gap-2 text-sm text-base-content/60">
                                                            <span>▣ {book.totalPages} Pages</span>
                                                            <span>Publisher: {book.publisher}</span>
                                                            <span>{book.yearOfPublishing}</span>
                                                        </div>
                                                    </div>

                                                    <Link
                                                        href={`/books/${book.bookId}`}
                                                        className="btn btn-success w-full rounded-xl text-white"
                                                    >
                                                        View Details
                                                    </Link>

                                                </div>
                                            </div>}
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="text-center text-lg font-semibold">
                                    No Read Books Found
                                </p>
                            )
                        }
                    </div>

                    <input type="radio" name="my_tabs_2" className="tab" aria-label={`Wishlist Books ${wishlist.length}`} />
                    <div className="tab-content border-base-300 bg-base-100 p-10">
                        {
                            wishlist.length > 0 ? (
                                wishlist.map((book: IBook) => {
                                    return (
                                        <div
                                            key={book.bookId}
                                            className="flex flex-col gap-5 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-md sm:flex-row"
                                        >
                                            {<div className="flex flex-col gap-5 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-md transition hover:shadow-xl sm:flex-row">

                                                {/* Book Cover */}
                                                <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-xl bg-base-200 sm:h-64 sm:w-44">
                                                    <Image
                                                        src={book.image}
                                                        alt={book.bookName}
                                                        fill
                                                        sizes="(max-width: 640px) 100vw, 176px"
                                                        className="object-contain"
                                                    />
                                                </div>

                                                {/* Book Details */}
                                                <div className="flex min-w-0 flex-1 flex-col justify-between gap-5">

                                                    <div className="space-y-3">
                                                        <div className="flex items-center justify-between gap-3">
                                                            <span className="badge badge-success badge-outline">
                                                                {book.category}
                                                            </span>

                                                            <span className="whitespace-nowrap font-semibold text-amber-500">
                                                                ★ {book.rating}
                                                            </span>
                                                        </div>

                                                        <div>
                                                            <h2 className="text-2xl font-bold">
                                                                {book.bookName}
                                                            </h2>
                                                            <p className="mt-1 text-sm text-base-content/60">
                                                                By {book.author}
                                                            </p>
                                                        </div>

                                                        <p className="text-sm leading-7 text-base-content/75">
                                                            {book.review}
                                                        </p>

                                                        <div className="flex flex-wrap gap-2">
                                                            {book.tags.map((tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className="rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        <div className="flex flex-wrap justify-between gap-2 text-sm text-base-content/60">
                                                            <span>▣ {book.totalPages} Pages</span>
                                                            <span>Publisher: {book.publisher}</span>
                                                            <span>{book.yearOfPublishing}</span>
                                                        </div>
                                                    </div>

                                                    <Link
                                                        href={`/books/${book.bookId}`}
                                                        className="btn btn-success w-full rounded-xl text-white"
                                                    >
                                                        View Details
                                                    </Link>

                                                </div>
                                            </div>}
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="text-center text-lg font-semibold">
                                    No Read Books Found
                                </p>
                            )
                        }
                    </div>


                </div>
            </h2>
        </div>
    );
};

export default ListedBooks;