import type {Metadata} from "next";
import {t} from "@/utils/Utils";
import global from '@/locales/cs/global.json';
import schedule from '@/locales/cs/schedule.json';
import Image from "next/image";

export const metadata: Metadata = {
    title: `${t(schedule, 'title')}  | ${t(global, 'title')}`,
    description: t(schedule, 'title'),
};

export default function SchedulePage() {
    return (
        <div className="uk-text-center">
            <Image src="/assets/harmonogram.jpg"
                   height={272}
                   width={272}
                   title={t(schedule, 'imageDescription')}
                   alt={t(schedule, 'imageDescription')}
                   data-uk-image=""
            />
        </div>
    )
}