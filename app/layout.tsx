import { Nunito } from 'next/font/google';

import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import './globals.css';
import { Providers } from '@/shared/components/shared/providers';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body className={nunito.className}><StackProvider app={stackServerApp}><StackTheme>
        <Providers>{children}</Providers>
      </StackTheme></StackProvider></body>
    </html>
  );
}
