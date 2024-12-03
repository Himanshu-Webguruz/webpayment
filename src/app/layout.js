import { Inter, Outfit } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "/public/service.css";
import "/public/hub.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BodyClassWrapper from "@/utils/BodyClassWrapper";
import Addresshome from "@/components/homeComponents/12Addresshome";
import DynamicContact from "@/utils/DynamicContact";
import Script from "next/script";
import CanonicalLink from "@/components/CanonicalLink";

// Import the Inter and Outfit fonts
export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <CanonicalLink/>
       
         {/* Google Tag Manager */}
         <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NTXKT79M');
          `}
        </Script>
        {/* End Google Tag Manager */}
        <meta name="google-site-verification" content="HBSffUhqLmjL_SyultPiEJ33DSc-3x39LXSVJOOh4ZY" />
        <link rel="preload" href="/_next/static/media/26a46d62cd723877-s.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/_next/static/media/581909926a08bbc8-s.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/_next/static/media/df0a9ae256c0569c-s.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/_next/static/media/6d93bde91c0c2823-s.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GX9DH5XMG1" strategy="afterInteractive" async />
        <Script id="google-analytics" strategy="afterInteractive" async>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GX9DH5XMG1');
          `}
        </Script>
        <Script id="organization-ldjson" type="application/ld+json" strategy="afterInteractive" defer>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "WebGuruz Technologies Pvt Ltd",
            "url": "https://webguruz.in/",
            "logo": "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=256&q=75",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91 708 723 3361",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "IN",
                "availableLanguage": "en"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+44 758 841 8605",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "GB",
                "availableLanguage": "en"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+1 (571) 662-8059",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "US",
                "availableLanguage": "en"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/webguruztechnologies",
              "https://twitter.com/Webguruz",
              "https://www.instagram.com/webguruz",
              "https://www.youtube.com/channel/UC-xaX1FJWj40ED-cTm2Lq6w",
              "https://www.linkedin.com/company/webguru-technologies-pvt.-ltd.",
              "https://in.pinterest.com/webguruz"
            ]
          })}
        </Script>
        <Script id="website-ldjson" type="application/ld+json" strategy="afterInteractive" defer>
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "WebGuruz Technologies Pvt Ltd",
            "url": "https://webguruz.in/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>
        <Script id="localbusiness-ldjson" type="application/ld+json" strategy="afterInteractive" defer>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "WebGuruz Technologies Pvt Ltd",
            "image": "https://webguruz.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-logo-one.f806d280.webp&w=256&q=75",
            "url": "https://webguruz.in",
            "telephone": "+91 708 723 3361",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "C-205, 4th Floor, SM Heights NH 5, Sector 74",
              "addressLocality": "Mohali",
              "postalCode": "160071",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 30.7076277,
              "longitude": 76.6828906
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/webguruztechnologies",
              "https://twitter.com/Webguruz",
              "https://www.instagram.com/webguruz",
              "https://www.youtube.com/channel/UC-xaX1FJWj40ED-cTm2Lq6w",
              "https://www.linkedin.com/company/webguru-technologies-pvt.-ltd.",
              "https://in.pinterest.com/webguruz"
            ]
          })}
        </Script>
      </head>
      <body>
           {/* Google Tag Manager (noscript) */}
           <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTXKT79M"
                  height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <BodyClassWrapper />
        <Header />
        {children}
        <DynamicContact />
        <Addresshome />
        <Footer />
      </body>
    </html>
  );
}
