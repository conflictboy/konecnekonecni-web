import '../../styles/style.scss';
import type {Metadata} from "next";
import Footer from "@/app/Footer";
import Header from "@/app/Header";
import {t} from "@/utils/Utils";
import global from '@/locales/cs/global.json';
import {Suspense} from "react";
import Spinner from "@/components/Spinner";

export const metadata: Metadata = {
    title: t(global, 'title'),
    description: t(global, 'description'),
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="cs">
            <body>
                <Suspense fallback={<Spinner />}>
                    <div className="uk-container uk-container-small">
                        <Header/>
                        <div className="uk-position-relative">
                            {children}
                        </div>
                        <Footer/>
                    </div>
                </Suspense>
            </body>
        </html>
    );
}
