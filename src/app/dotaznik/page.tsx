import type {Metadata} from "next";
import {t} from "@/utils/Utils";
import global from '@/locales/cs/global.json';
import weddingRegistration from '@/locales/cs/weddingRegistration.json';
import WeddingRegistrationWrapper from "@/app/dotaznik/WeddingRegistrationWrapper";

export const metadata: Metadata = {
    title: `${t(weddingRegistration, 'title')}  | ${t(global, 'title')}`,
    description: t(weddingRegistration, 'title'),
};

export default function WeddingRegistrationPage() {
    return (
        <div className="uk-section uk-text-center">
            <WeddingRegistrationWrapper />
        </div>
    )
}