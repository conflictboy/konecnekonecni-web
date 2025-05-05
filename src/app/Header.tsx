'use client'

import Image from "next/image";
import dynamic from "next/dynamic";

const Menu = dynamic(
    () => import('@/components/Menu'), {
        ssr: false
    }
);

export default function Header() {
    const image = '/assets/decoration.webp';
    const backgroundImage = '/assets/background.webp';

    return (
        <>
            <Image src={image} width={300} height={80} alt="image-top-right" className="top-left-decoration uk-position-z-index-high"/>
            <Image src={image} width={300} height={80} alt="image-top-right" className="top-right-decoration uk-position-z-index-high uk-visible@m"/>
            <Menu/>

            <div className="background-center">
                <Image src={backgroundImage} width={381} height={381} alt='Background' />
            </div>
        </>
    )
}