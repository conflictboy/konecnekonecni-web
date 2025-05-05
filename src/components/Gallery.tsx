import Image from "next/image";
import Link from "next/link";

export default function Gallery({items}: {items: string[]}) {
    return (
        <div className="uk-section">
            <div data-uk-lightbox="" data-uk-grid="" className="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center">
                {items.map((imageName, key) => (
                    <Link key={key} href={`/gallery/${imageName}.jpg`} >
                        <Image
                            src={`/gallery/thumb/${imageName}.jpg`}
                            data-src={`/gallery/thumb/${imageName}.jpg`}
                            width={280}
                            height={280}
                            alt={imageName}
                            data-uk-img=""
                            className="uk-border-rounded"/>
                    </Link>
                ))}
            </div>
        </div>
    )
}