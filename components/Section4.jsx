import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from './_child/Author'

const Section4 = () => {
    return (
        <>
            <section className="container mx-auto md:px-12 py-16">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="item flex flex-col items-center justify-center">
                        <h1 className="font-bold text-4xl py-12 text-center">Business</h1>
                        <div className="flex flex-col gap-6">
                            {Post()}
                            {Post()}
                            {Post()}
                            {Post()}
                        </div>
                    </div>
                    <div className="item flex flex-col items-center justify-center">
                        <h1 className="font-bold text-4xl py-12 text-center">Travel</h1>
                        <div className="flex flex-col gap-6">
                            {Post()}
                            {Post()}
                            {Post()}
                            {Post()}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section4

const Post = () => {
    return (
        <div className="flex gap-5">
            <div className="images flex flex-col justify-start">
                <Link href={`/`}>
                    <Image src={`/images/img1.jpg`} className="rounded" width={400} height={400} alt="image" />
                </Link>
            </div>
            <div className="info flex flex-col justify-center">
                <div className="cat">
                    <Link href={`/`} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                    <Link href={`/`} className="text-gray-800 hover:text-gray-600"> - 3 June, 2022</Link>
                </div>
                <div className="title">
                    <Link href={`/`} className="text-lg font-medium text-gray-800 hover:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                </div>
                <Author />
            </div>
        </div>
    )
}