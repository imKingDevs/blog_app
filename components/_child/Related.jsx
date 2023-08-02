import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from './Author'

const Related = () => {
    return (
        <>
            <section className="pt-12">
                <h1 className="font-bold text-4xl py-12 text-center">Related</h1>
                <div className="flex flex-col gap-10">
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

export default Related

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