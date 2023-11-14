import { Inter_Tight } from 'next/font/google'

const font = Inter_Tight({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
})

export default function MyApp({ Component, pageProps }) {
    return (
        <main className={font.className}>
            <Component {...pageProps} />
        </main>
    )
}