import { Inter } from 'next/font/google';
import './globals.css';
import Modal from '@/components/Modal';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'blog-project-modal-zustand',
};

export default function RootLayout({ children }) {
    return (
        <html lang="de">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
