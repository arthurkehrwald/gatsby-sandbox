import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export const Seo = ({ title, description, pathname, children }) => {
    const { title: defaultTitle, description: defaultDescription, image, siteUrl, lang } = useSiteMetadata()
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
        lang: lang,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description}/>
            <meta name="twitter:url" content={seo.url} />
            <html lang={seo.lang} />
            {children}
        </>
    )
}