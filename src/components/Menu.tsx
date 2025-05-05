'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import {clsx} from "clsx";
import {t} from "@/utils/Utils";
import global from '@/locales/cs/global.json';
import UIkit from "uikit";

export default function Menu() {
    const pathname = usePathname();
    const menuItems = [
        {
            path: '/',
            text: t(global, 'mainPage')
        },
        {
            path: '/harmonogram',
            text: t(global, 'schedule')
        },
        {
            path: '/doplnujici-informace',
            text: t(global, 'additionalInformation')
        },
        {
            path: '/dotaznik',
            text: t(global, 'weddingRegistration')
        }
    ]

    return (
        <>
            <header className="uk-container uk-container-expand uk-sticky uk-sticky-fixed uk-nav-header uk-padding-large" data-uk-sticky="" style={{backgroundColor: '#fff'}}>
                <nav className="" data-uk-navbar="">
                    <div className="uk-navbar-center uk-visible@m uk-position-z-index-high">
                        <ul className="uk-navbar-nav">
                            {menuItems.map((menuItem, key) => (
                                <li key={key}>
                                    <Link href={menuItem.path} className={clsx(pathname === menuItem.path && 'uk-active')}>
                                        {menuItem.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="uk-navbar-right">
                        <Link href="#"
                              rel="nofollow"
                              className="uk-hidden@m"
                              data-uk-icon="icon:menu; ratio: 2;"
                              data-uk-toggle=".offcanvas-mobile-menu"
                        />
                    </div>
                </nav>
            </header>

            <div className="offcanvas-mobile-menu" data-uk-offcanvas="mode: slide; flip: true; overlay: true">
                <div className="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
                    <button className="uk-offcanvas-close uk-close uk-icon" type="button" data-uk-close=""></button>
                    <ul className="uk-nav uk-nav-default">
                        {menuItems.map((menuItem, key) => (
                            <li key={key}>
                                <Link href={menuItem.path} onClick={() => UIkit.offcanvas('.offcanvas-mobile-menu')?.hide()} className={clsx(pathname === menuItem.path && 'uk-active')}>
                                    {menuItem.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}