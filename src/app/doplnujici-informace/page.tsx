import {t} from "@/utils/Utils";
import global from '@/locales/cs/global.json';
import additionalInformation from '@/locales/cs/additionalInformation.json';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: `${t(additionalInformation, 'title')}  | ${t(global, 'title')}`,
    description: t(additionalInformation, 'title'),
};


export default function AdditionalInformationPage() {
    return (
        <div className="uk-text-center">
            info o tom, že je oběd pouze rodinný<br />
            info kde parkovat<br />
            tel. kontakt na svědky
        </div>
    )
}