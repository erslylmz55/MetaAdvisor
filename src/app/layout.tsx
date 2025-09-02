import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MetaAdvisor - AI-Powered Business Intelligence & Strategic Insights',
  description: 'Transform your business with MetaAdvisor\'s AI-driven analytics, strategic recommendations, and intelligent insights. Increase revenue, reduce costs, and make smarter decisions with our advanced business intelligence platform.',
  keywords: ['AI business intelligence', 'strategic insights', 'business analytics', 'AI recommendations', 'data-driven decisions', 'business optimization'],
  authors: [{ name: 'MetaAdvisor Team' }],
  creator: 'MetaAdvisor',
  publisher: 'MetaAdvisor',
  robots: 'index, follow',
  openGraph: {
    title: 'MetaAdvisor - AI-Powered Business Intelligence',
    description: 'Transform your business with AI-driven insights and strategic recommendations for sustainable growth.',
    type: 'website',
    locale: 'en_US',
    siteName: 'MetaAdvisor',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetaAdvisor - AI-Powered Business Intelligence',
    description: 'Transform your business with AI-driven insights and strategic recommendations.',
    creator: '@metaadvisor',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1e40af',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://metaadvisor.com" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-bold text-primary-dark">MetaAdvisor</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
                <a href="#benefits" className="text-gray-600 hover:text-primary transition-colors">Benefits</a>
                <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
                <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
                <button className="btn-primary px-6 py-2">
                  Get Started
                </button>
              </div>
              
              {/* Mobile menu button */}
              <button className="md:hidden p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Main content with top padding for fixed nav */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
