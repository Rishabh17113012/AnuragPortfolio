import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { PreloadResources } from '@/utils/PreloadResources';
import { Poppins, Jura } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const jura = Jura({
  subsets: ['latin'],
  variable: '--font-jura',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anurag | Software Developer',
  description:
    'Front-end Developer specializing in engaging, scalable web experiences. Explore my portfolio for innovative projects, skills, and my professional journey.',
  keywords: [
    'Anurag',
    'Anurag Codes',
    'Front-end Developer',
    'Web Developer',
    'JavaScript Developer',
    'React Developer',
    'Next.js Developer',
    'Developer Portfolio',
    'Portfolio Website',
    'Self-taught Developer',
    'JavaScript',
    'React',
    'Next.js',
    'TypeScript',
    'Vite',
    'TailwindCSS',
    'HTML',
    'CSS',
    'UI/UX Design',
    'Responsive Design',
    'Web Development',
  ],
  creator: 'Anurag',
  authors: [{ name: 'Anurag', url: '' }],
  manifest: '/manifest.json',
  openGraph: {
    title: 'Anurag | Software Developer Portfolio',
    description:
      'Front-end Developer | Building engaging and scalable unique web experiences.',
    url: '',
    siteName: 'Anurag',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Anurag | Software Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anurag | Software Developer Portfolio',
    description:
      'Front-end Developer | Building engaging and scalable unique web experiences.',
    creator: '@Anurag03singh',
    images: [
      {
        url: '/twitter-image.png',
        width: 1200,
        height: 630,
        alt: 'Anurag | Software Developer Portfolio',
      },
    ],
  },
  metadataBase: undefined,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#1a202c' },
  ],
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jura.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title>Anurag Software Developer</title>
      </head>
      <body className="bg-bgLight dark:bg-bgDark">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PreloadResources />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
