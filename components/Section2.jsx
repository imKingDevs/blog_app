import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from './_child/Author'

const Section2 = () => {
    return (
        <>
            <section className="container mx-auto md:px-12 py-10">
                <h1 className='font-bold text-4xl py-12 text-center '>Latest Posts</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                </div>
            </section>
        </>
    )
}

export default Section2

const Post = () => {
    return (
        <div className="item">
            <div className="images">
                    <Link href={`/`}>
                        <Image src={`/images/img1.jpg`} className='rounded-sm' width={500} height={350} alt="image"/>
                    </Link>
                </div>
                <div className="info flex flex-col justify-center py-4">
                    <div className="cat">
                        <Link href={`/`} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                        <Link href={`/`} className="text-gray-800 hover:text-gray-600"> - 3 June, 2022</Link>
                    </div>
                    <div className="title">
                        <Link href={`/`} className="text-xl text-gray-800 hover:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, magnam.</Link>
                    </div>
                    <Author />
                </div>
        </div>
    )
}