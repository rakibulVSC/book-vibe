
import { IBook } from "@/books.type";
import BookCard from "./BookCard";
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

const Book = async () => {
    const booksData: BookType[] = await getBooks();

    console.log(booksData);

    return (
        <section className="container mx-auto my-[70px]">
            <h2 className="text-3xl font-bold mb-8">Popular Books</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {booksData.map((book:IBook,ind:number) => {
                    return <BookCard key={ind} book={book} />
                })}

            </div>
        </section>
    );
};

export default Book;