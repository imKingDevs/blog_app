import Image from 'next/image'
import React from 'react'
import Author from '../../components/_child/Author'
import Related from '../../components/_child/Related'
import Format from '../../layout/Format'

const Page = () => {
    return (
        <>
            <Format>
                <section className="container mx-auto md:px-2 py-16 w-1/2">
                    <div className="flex justify-center">
                        <Author></Author>
                    </div>
                    <div className="post py-10">
                        <h1 className="font-bold text-4xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <p className="text-gray-500 text-xl text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eaque consequuntur maxime odio dolore? Commodi hic ut reprehenderit reiciendis quas. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <div className="py-10">
                            <Image src={`/images/img1.jpg`} width={900} height={600}></Image>
                        </div>
                        <div className="content text-gray-600 text-lg flex flex-col gap-4">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis veritatis ut sint enim assumenda id, magnam amet fugit ea vero ipsa sapiente tempore fuga blanditiis expedita obcaecati laborum impedit similique! Eligendi, non?</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis veritatis ut sint enim assumenda id, magnam amet fugit ea vero ipsa sapiente tempore fuga blanditiis expedita obcaecati laborum impedit similique! Eligendi, non?</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis veritatis ut sint enim assumenda id, magnam amet fugit ea vero ipsa sapiente tempore fuga blanditiis expedita obcaecati laborum impedit similique! Eligendi, non?</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis veritatis ut sint enim assumenda id, magnam amet fugit ea vero ipsa sapiente tempore fuga blanditiis expedita obcaecati laborum impedit similique! Eligendi, non?</p>
                        </div>
                    </div>
                    <Related></Related>
                </section>
            </Format>
        </>
    )
}

export default Page