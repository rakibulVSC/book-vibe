import React from 'react';
import Image from 'next/image';
import { IBook } from '@/books.type';
interface IBookCardProps{
    book:IBook
}

const BookCard = ({book}:IBookCardProps) => {
    return (
        <div
                            key={book.bookId}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >

                            {/* Image */}
                            <div className="relative h-80 overflow-hidden bg-gray-100">
                                <Image
                                    src={book.image}
                                    alt={book.bookName}
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                {/* Category + Rating */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-green-600">
                                        {book.category}
                                    </span>

                                    <div className="flex items-center gap-1">
                                        <span className="text-yellow-400 text-lg">
                                            ★
                                        </span>

                                        <span className="font-semibold text-gray-700">
                                            {book.rating}
                                        </span>
                                    </div>
                                </div>

                                {/* Book Name */}
                                <h3 className="text-xl font-bold text-gray-800 mt-3 line-clamp-1">
                                    {book.bookName}
                                </h3>

                                {/* Author */}
                                <p className="text-gray-500 text-sm mt-1">
                                    By {book.author}
                                </p>

                                {/* Pages + Year */}
                                <div className="flex items-center justify-between mt-5 text-sm text-gray-500">
                                    <span>
                                        📖 {book.totalPages} Pages
                                    </span>

                                    <span>
                                        {book.yearOfPublishing}
                                    </span>
                                </div>

                                {/* Tags */}
                                <div className="flex gap-2 mt-4">
                                    {book.tags.map((tag) => {
                                        return (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium"
                                            >
                                                {tag}
                                            </span>
                                        );
                                    })}
                                </div>

                                {/* Button */}
                                <button className="w-full mt-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition">
                                    View Details
                                </button>

                            </div>
                        </div>
    );
};

export default BookCard;