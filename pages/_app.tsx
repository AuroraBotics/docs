import '../output.css';
import { useState, useEffect } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { Image, Link } from '@nextui-org/react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {

    const router = useRouter();

    return (
        <NextUIProvider>
            <Component components={customMDX} {...pageProps} />
        </NextUIProvider>
    )
}


const customMDX = {
    img: (props: { alt: string, src: { src: string, width: number, height: number } }) => {

        const [img, setImg] = useState(<></>)
        useEffect(() => {
            const imgComp =
                <Image
                    radius='lg'
                    isBlurred
                    as={NextImage}
                    alt={props.alt}
                    src={props.src.src}
                    width={props.src.width}
                    height={props.src.height}
                />
            setImg(imgComp);

        }, [])

        return img;
    },
    a: (href: { href: string, children: string }) => {
        var external = !(href.href.startsWith("/") || href.href.startsWith(".") || href.href.startsWith("#") || href.href.includes("aurorabotics.com") || href.href.startsWith("localhost"));
        return (
            <Link
                // isBlock
                underline='hover'
                showAnchorIcon={external}
                isExternal={external}
                as={NextLink}
                href={href.href ?? ''}
            >{href.children}</Link>
        )
    }
}