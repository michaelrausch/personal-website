export default function GetLDJson() {
    let structuredData = {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://michaelrausch.nz/#ldid",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Christchurch",
            "addressRegion": "CA",
            "postalCode": "",
            "addressCountry": "NZ"
        },
        "name": "Michael Rausch",
        "email": "michael@rausch.nz",
        "telephone": "(027) 952-9554",
        "url": "https://michaelrausch.nz",
        "image": "",
        "priceRange": "$$"
    }

    return structuredData
}
