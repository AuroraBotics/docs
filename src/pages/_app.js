import { Inter, Fugaz_One, Inter_Tight } from 'next/font/google'

const inter = Inter_Tight({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
})




export default function MyApp({ Component, pageProps }) {
    return (
        <main className={inter.className}>
            <Component {...pageProps} />
        </main>
    );
}