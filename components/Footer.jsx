import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import Newslatter from './_child/Newslatter'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-50">
                <Newslatter />
                <div className="container mx-auto flex justify-center py-12">
                    <div className="py-5">
                        <div className="flex gap-6 justify-center">
                            <Link href={`/`}>
                                <FaFacebookF className='fonts_icon' />
                            </Link>
                            <Link href={`/`}>
                                <FaInstagram className='fonts_icon' />
                            </Link>
                            <Link href={`/`}>
                                <FaTwitter className='fonts_icon' />
                            </Link>
                        </div>
                        <div className="py-5 text-gray-400">Copyright @2023 All rights reserved</div>
                        <div className="text-gray-400 text-center">Terms & Conditions</div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer