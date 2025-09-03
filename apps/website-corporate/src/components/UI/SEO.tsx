import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { SEOData } from '../../types';

interface SEOProps extends SEOData {
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  ogImage = '/images/corpscode-og.jpg',
  canonical,
}) => {
  const baseUrl = 'https://www.corpscode.bo';
  const fullTitle = title.includes('CorpsCode')
    ? title
    : `${title} | CorpsCode - Desarrollo de Software en La Paz, Bolivia`;

  const defaultKeywords = [
    'desarrollo de software',
    'La Paz Bolivia',
    'programación',
    'tecnología',
    'software empresarial',
    'consultoría tecnológica',
    'ERP InnovaPaz',
    'transformación digital Bolivia',
    'CorpsCode',
  ];

  const allKeywords = [...new Set([...keywords, ...defaultKeywords])];

  return (
    <Helmet>
      {/* Títulos y descripciones */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={allKeywords.join(', ')} />

      {/* Canonical URL */}
      {canonical && <link rel='canonical' href={`${baseUrl}${canonical}`} />}

      {/* Open Graph */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={`${baseUrl}${ogImage}`} />
      <meta property='og:site_name' content='CorpsCode' />
      <meta property='og:locale' content='es_BO' />

      {/* Twitter Card */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={`${baseUrl}${ogImage}`} />

      {/* Geolocalización */}
      <meta name='geo.region' content='BO-L' />
      <meta name='geo.placename' content='La Paz' />
      <meta name='geo.position' content='-16.4897;-68.1193' />
      <meta name='ICBM' content='-16.4897, -68.1193' />

      {/* Información local */}
      <meta name='locality' content='La Paz' />
      <meta name='country-name' content='Bolivia' />
      <meta name='author' content='CorpsCode - Desarrollo de Software' />

      {/* Robots */}
      <meta name='robots' content='index, follow' />
      <meta name='googlebot' content='index, follow' />

      {/* Idioma */}
      <html lang='es' />

      {/* Timezone */}
      <meta name='timezone' content='America/La_Paz' />

      {/* Structured Data */}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'CorpsCode',
          description: 'Empresa líder en desarrollo de software en La Paz, Bolivia',
          url: baseUrl,
          logo: `${baseUrl}/images/corpscode-logo.png`,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Calle 6 de Obrajes',
            addressLocality: 'La Paz',
            addressCountry: 'BO',
          },
          telephone: '+591-77123456',
          email: 'contacto@corpscode.bo',
          sameAs: [
            'https://facebook.com/corpscode',
            'https://twitter.com/corpscode',
            'https://linkedin.com/company/corpscode',
          ],
          areaServed: {
            '@type': 'Place',
            name: 'La Paz, Bolivia',
          },
        })}
      </script>
    </Helmet>
  );
};
