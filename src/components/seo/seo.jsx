import React, { useMemo, memo } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import site from 'src/config/site'

const SEO = memo(function SEO({ description, lang, meta, keywords, title }) {
  const metaDescription = description || site.siteMetadata.description

  const metaTitle = `${title ? `${title} | ` : ''}${site.siteMetadata.title}`

  const defaultMetas = useMemo(
    () =>
      [
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
          key: 'property-og:type',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'author',
          content: site.siteMetadata.author,
        },
        {
          name: 'description',
          content: metaDescription,
        },
      ].concat(
        keywords.length > 0
          ? { name: 'keywords', content: keywords.join(', ') }
          : [],
      ),
    [
      keywords,
      description,
      site.siteMetadata.description,
      title,
      site.siteMetadata.title,
    ],
  )

  const helmetMetas = useMemo(() => {
    if (!Array.isArray(meta)) {
      return defaultMetas
    }

    const metaPropKeys = meta
      .filter((m) => Object.prototype.hasOwnProperty.call(m, 'key'))
      .map((m) => m.key)

    const filteredDefaults = defaultMetas.filter(
      (m) =>
        !Object.prototype.hasOwnProperty.call(m, 'key') ||
        !metaPropKeys.includes(m.key),
    )

    return filteredDefaults.concat(meta)
  }, [defaultMetas, meta])

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={helmetMetas}
    />
  )
})

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  description: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
