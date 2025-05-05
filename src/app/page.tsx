import GoogleMap from "@/components/GoogleMap";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import mainPage from '@/locales/cs/mainPage.json';
import {t} from "@/utils/Utils";

export default function Home() {
    const galleryImages = Array.from({length: 15}, (_, i) => `image${i + 1}`);

    return (
        <>
            <div className="uk-text-center uk-overlay uk-overlay-default uk-margin-xxlarge-top">
                <h1 className="uk-heading-large uk-heading-divider">{t(mainPage, 'title')}</h1>

                <div className="uk-section">
                    <h2 className="uk-heading-small">{t(mainPage, 'section1Title')}</h2>
                    <p className="uk-text-lead">{t(mainPage, 'section1Text')}</p>
                </div>

                <div className="uk-section">
                    <h2 className="uk-heading-small">{t(mainPage, 'section2Title')}</h2>
                    <div className="uk-flex-middle" data-uk-grid="">
                        <div className="uk-width-2-5@m">
                            <p dangerouslySetInnerHTML={{__html: t(mainPage, 'section2Block1Text')}}></p>
                        </div>
                        <div className="uk-width-3-5@m">
                            <GoogleMap
                                defaultCenterLat={49.203125091611916}
                                defaultCenterLng={16.629743868515284}
                                markerLat={49.2029709}
                                markerLng={16.6297546}
                            />
                        </div>
                    </div>

                    <div className="uk-flex-middle" data-uk-grid="">
                        <div className="uk-width-2-5@m">
                            <p dangerouslySetInnerHTML={{__html: t(mainPage, 'section2Block2Text')}}></p>
                        </div>
                        <div className="uk-width-3-5@m">
                            <GoogleMap
                                defaultCenterLat={49.2160678}
                                defaultCenterLng={16.489077}
                                markerLat={49.21586766977259}
                                markerLng={16.494816997351705}
                            />
                        </div>
                    </div>
                </div>

                <div className="uk-section">
                    <h2 className="uk-text-lead">{t(mainPage, 'section3Title')}</h2>
                    <p dangerouslySetInnerHTML={{__html: t(mainPage, 'section3Text')}}></p>
                </div>

                <div className="uk-section">
                    <h2 className="uk-text-lead">{t(mainPage, 'section4Title')}</h2>
                    <p dangerouslySetInnerHTML={{__html: t(mainPage, 'section4Text')}}></p>
                </div>

                <Gallery items={galleryImages}/>
                <ContactForm/>
            </div>
        </>
    );
}
