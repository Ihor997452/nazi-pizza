import Footer from '@/components/footer/footer';
import './globals.css';
import type { Metadata } from 'next';
import { UnifrakturMaguntia } from 'next/font/google';
import Header from '@/components/header/header';
import { CartContextProvider } from '@/contexts/cartContext';

const inter = UnifrakturMaguntia({ weight: '400', preload: false });

export const metadata: Metadata = {
    title: 'Nazi Pizza',
    description: 'First nazi pizzeria',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={inter.className + ' bg-neutral-950 text-slate-100'}>
                <CartContextProvider>
                    <Header />
                    {children}
                </CartContextProvider>

                <Footer />
            </body>
        </html>
    );
}
