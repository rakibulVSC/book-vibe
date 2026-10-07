
import React from 'react';
import Image from 'next/image';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 rounded-3xl bg-base-200 px-6 py-10 md:px-12 md:py-14 shadow-lg">

                {/* Left Content */}
                <div className="space-y-6 text-center md:text-left">

                    <span className="inline-block rounded-full bg-success/10 px-4 py-2 text-sm font-semibold text-success">
                        📚 Discover Your Next Favorite Book
                    </span>

                    <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        Books to freshen up
                        <br />
                        <span className="text-success">
                            your bookshelf
                        </span>
                    </h1>

                    <p className="max-w-lg text-base-content/70 md:text-lg">
                        Explore amazing books, discover new stories, and
                        build a collection that makes your bookshelf special.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                        <button className="btn btn-success px-7">
                            Explore Books
                        </button>

                        <button className="btn btn-outline px-7">
                            View Collection
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-6 pt-2 md:justify-start">
                        <div>
                            <p className="text-2xl font-bold">500+</p>
                            <p className="text-sm text-base-content/60">
                                Books
                            </p>
                        </div>

                        <div className="h-10 w-px bg-base-content/20"></div>

                        <div>
                            <p className="text-2xl font-bold">100+</p>
                            <p className="text-sm text-base-content/60">
                                Authors
                            </p>
                        </div>

                        <div className="h-10 w-px bg-base-content/20"></div>

                        <div>
                            <p className="text-2xl font-bold">4.8 ⭐</p>
                            <p className="text-sm text-base-content/60">
                                Rating
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center">
                    <div className="absolute h-72 w-72 rounded-full bg-success/20 blur-3xl"></div>

                    <Image
                        src={bannerImg}
                        alt="Books Banner"
                        className="relative w-full max-w-md rounded-2xl object-cover shadow-2xl"
                        priority
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;

