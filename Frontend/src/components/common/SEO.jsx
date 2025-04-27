import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  twitterCard = 'summary_large_image' 
}) => {
  const siteTitle = 'LYLAH - Premium Perfumes';
  const defaultDescription = 'Discover luxury fragrances at LYLAH. Premium perfumes crafted with the finest ingredients.';
  const defaultImage = '/images/og-default.jpg'; // Add your default OG image
  const siteUrl = process.env.REACT_APP_SITE_URL || 'https://lylah.com';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image || `${siteUrl}${defaultImage}`} />
      <meta property="og:url" content={url || siteUrl} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@lylahperfumes" /> {/* Add your Twitter handle */}
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || `${siteUrl}${defaultImage}`} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <link rel="canonical" href={url || siteUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "LYLAH",
          "url": siteUrl,
          "logo": `${siteUrl}/images/logo.png`,
          "sameAs": [
            "https://facebook.com/lylahperfumes",
            "https://twitter.com/lylahperfumes",
            "https://instagram.com/lylahperfumes"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
