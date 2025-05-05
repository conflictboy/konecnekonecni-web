'use client';

import dynamic from "next/dynamic";

const UseUIKit = dynamic(
    () => import('@/components/UseUIkit'), {
        ssr: false
    }
);

export default function Footer() {
    return (
        <>
            <UseUIKit />
        </>
    );
}