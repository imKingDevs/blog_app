import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from './_child/Author'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Section1 = () => {
    return (
        <>
            <section className='py-16'>
                <div className="container mx-auto md:px-12">
                    <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                    >
                        <SwiperSlide>{Slide()}</SwiperSlide>
                        <SwiperSlide>{Slide()}</SwiperSlide>
                        <SwiperSlide>{Slide()}</SwiperSlide>
                        <SwiperSlide>{Slide()}</SwiperSlide>
                        <SwiperSlide>{Slide()}</SwiperSlide>
                        <SwiperSlide>{Slide()}</SwiperSlide>
                        <SwiperSlide>{Slide()}</SwiperSlide>
                        <SwiperSlide>{Slide()}</SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}
export default Section1

const Slide = () => {
    return (
        <>
            <div className="lg:grid-cols-2 grid gap-7">
                <div className="images">
                    <Link href={`/`}>
                        <Image src={`/images/img1.jpg`} width={600} height={600} alt="image"/>
                    </Link>
                </div>
                <div className="info flex flex-col justify-center">
                    <div className="cat">
                        <Link href={`/`} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                        <Link href={`/`} className="text-gray-800 hover:text-gray-600"> - 3 June, 2022</Link>
                    </div>
                    <div className="title">
                        <Link href={`/`} className="text-3xl md:text-6xl text-gray-800 hover:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, magnam.</Link>
                    </div>
                    <p className='text-gray-500 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque non maiores quasi aperiam dolores repudiandae, incidunt molestiae ipsa amet odit consequatur optio placeat provident et quaerat doloremque eos, necessitatibus, ex debitis. Ipsam hic sunt necessitatibus minima rerum sed, exercitationem eum alias eius suscipit commodi enim.</p>
                    <Author />
                </div>
            </div>
        </>
    )
}
