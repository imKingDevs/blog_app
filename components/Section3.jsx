import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import Author from './_child/Author';

const Section3 = () => {
    return (
        <>
            <section className="container mx-auto md:px-12 py-10">
                <h1 className='font-bold text-4xl py-12 text-center '>Most Popular</h1>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                >
                    <SwiperSlide>{Post()}</SwiperSlide>
                    <SwiperSlide>{Post()}</SwiperSlide>
                    <SwiperSlide>{Post()}</SwiperSlide>
                    <SwiperSlide>{Post()}</SwiperSlide>
                    <SwiperSlide>{Post()}</SwiperSlide>
                    <SwiperSlide>{Post()}</SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default Section3

const Post = () => {
    return (
        <div className="grid">
            <div className="images">
                <Link href={`/`}>
                    <Image src={`/images/img1.jpg`} width={600} height={400} alt="image" />
                </Link>
            </div>
            <div className="info flex flex-col justify-center py-4">
                <div className="cat">
                    <Link href={`/`} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                    <Link href={`/`} className="text-gray-800 hover:text-gray-600"> - 3 June, 2022</Link>
                </div>
                <div className="title">
                    <Link href={`/`} className="text-3xl md:text-4xl text-gray-800 hover:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, magnam.</Link>
                </div>
                <Author />
            </div>
        </div>
    )
}