import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';

const robotoFlex = Roboto_Flex({ 
  subsets: ['latin'],
  weight: ['100', '400'],
  variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
  title: 'Silver Surfer',
  description: 'Herald of Galactus, Rider of the Cosmic Waves',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${robotoFlex.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}