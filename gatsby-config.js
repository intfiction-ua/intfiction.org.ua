const filesStatic = {
  resolve: 'gatsby-source-filesystem',
  options: {
    name: 'assets',
    path: './static/',
  },
};

const filesArticles = {
  resolve: 'gatsby-source-filesystem',
  options: {
    name: 'article',
    path: './content/article',
  },
};

const filesPages = {
  resolve: 'gatsby-source-filesystem',
  options: {
    name: 'page',
    path: './content/page',
  },
};

const gatsbyPluginSass = {
  resolve: 'gatsby-plugin-sass',
  options: {},
};

const gatsbyTransformerRemark = {
  resolve: 'gatsby-transformer-remark',
  options: {
    footnotes: true, // Footnotes mode (default: true)
    gfm: true, // GitHub Flavored Markdown mode (default: true)
    excerpt_separator: '<!-- cut -->',
    plugins: [
      'gatsby-remark-directive',
      'gatsby-remark-directive-tag',
      {
        resolve: 'gatsby-remark-images',
        options: {
          // It's important to specify the maxWidth (in pixels) of
          // the content container as this plugin uses this as the
          // base for generating different widths of each image.
          maxWidth: 900,
          srcSetBreakpoints: [ 300, 600, 900 ],
        },
      },
      {
        resolve: 'gatsby-remark-copy-linked-files',
        options: {
          ignoreFileExtensions: [ 'png', 'jpg', 'jpeg' ],
        },
      },
      {
        resolve: 'gatsby-remark-table-of-contents',
        options: {
          exclude: 'Зміст',
          tight: true,
          ordered: false,
          fromHeading: 1,
          toHeading: 6,
          className: 'notification is-light',
        },
      },
      'gatsby-remark-autolink-headers',
      'gatsby-remark-smartypants',
      'gatsby-remark-external-links',
    ],
  },
};

const gatsbyPluginSharp = {
  resolve: 'gatsby-plugin-sharp',
  options: {},
};

const gatsbyGoogleAnalytics = {
  resolve: 'gatsby-plugin-google-gtag',
  options: {
    trackingIds: [
      'G-BTT1N2WZZT',
    ],
    gtagConfig: {
      anonymize_ip: true,
      cookie_expires: 0,
    },
    pluginConfig: {
      head: false,
      respectDNT: true,
    },
  },
};

module.exports = {
  siteMetadata: {
    title: 'Українська Інтерактивна Література',
    siteUrl: 'https://intfiction.org.ua',
  },
  plugins: [
    filesStatic,
    filesArticles,
    filesPages,
    'gatsby-plugin-react-helmet',
    gatsbyPluginSass,
    gatsbyPluginSharp,
    gatsbyTransformerRemark,
    gatsbyGoogleAnalytics,
  ],
};
