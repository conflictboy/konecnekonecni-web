import type {Metadata} from "next";
import {t} from "@/utils/Utils";
import global from '@/locales/cs/global.json';
import schedule from '@/locales/cs/schedule.json';

export const metadata: Metadata = {
    title: `${t(schedule, 'title')}  | ${t(global, 'title')}`,
    description: t(schedule, 'title'),
};

export default function SchedulePage() {
    const scheduleBlock = [
        {
            title: t(schedule, 'ceremony.title'),
            text: t(schedule, 'ceremony.time'),
        },
        {
            title: t(schedule, 'family_lunch.title'),
            text: t(schedule, 'family_lunch.time'),
        },
        {
            title: t(schedule, 'friends_arrival.title'),
            text: t(schedule, 'friends_arrival.time'),
        },
        {
            title: t(schedule, 'photo.title'),
            text: t(schedule, 'photo.time'),
        },
        {
            title: t(schedule, 'banquet.title'),
            text: t(schedule, 'banquet.time'),
        },
        {
            title: t(schedule, 'first_dance.title'),
            text: t(schedule, 'first_dance.time'),
        },
        {
            title: t(schedule, 'bouquet_toss.title'),
            text: t(schedule, 'bouquet_toss.time'),
        },
        {
            title: t(schedule, 'sparkler_dance.title'),
            text: t(schedule, 'sparkler_dance.time'),
        }
    ];

    return (
        <div className="uk-text-center">
            {scheduleBlock.map((item, key) => {
                const sectionClass = `uk-section${key !== 0 ? ' uk-padding-remove-top' : ''}`;

                return (
                    <div key={key} className={sectionClass}>
                        <h2 className="uk-heading-small">{item.title}</h2>
                        <p className="uk-heading-small">{item.text}</p>

                        {key !== scheduleBlock.length - 1 && <hr/>}
                    </div>
                )
            })}
        </div>
    )
}