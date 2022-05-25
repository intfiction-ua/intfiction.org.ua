const config = require('./src/config');

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
      config.gtagId,
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

const gatsbyPluginFeed = {
  resolve: 'gatsby-plugin-feed',
  options: {
    query: `
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            site_url: siteUrl
          }
        }
      }
    `,
    feeds: [
      {
        serialize: ({ query: { site, allMarkdownRemark } }) => (
          allMarkdownRemark.nodes.map((node) => ({
            ...node.frontmatter,
            description: node.excerpt,
            date: node.frontmatter.date,
            url: site.siteMetadata.siteUrl + node.fields.slug,
            guid: site.siteMetadata.siteUrl + node.fields.slug,
            // custom_elements: [ { 'content:encoded': node.html } ],
          }))
        ),
        query: `
          query {
            allMarkdownRemark(
              filter: { fields: { nodeType: { eq: "article" } } }
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 10
            )
            {
              nodes {
                fields {
                  slug
                  tags
                  categories
                }
                excerpt
                frontmatter {
                  title
                  date
                }
              }
            }
          }
        `,
        output: config.siteRss,
        title: config.siteTitle,
      },
    ],
  },
};

const gatsbyPurgeCSS = {
  resolve: 'gatsby-plugin-purgecss',
  options: {
    // printRejected: true, // Print removed selectors and processed file names
    develop: true, // Enable while using `gatsby develop`
    // tailwind: true, // Enable tailwindcss support
    // whitelist: ['whitelist'], // Don't remove this selector
    // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
  },
};

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
  },
  plugins: [
    filesStatic,
    filesArticles,
    filesPages,
    'gatsby-plugin-react-helmet',
    gatsbyPluginFeed,
    gatsbyPluginSass,
    gatsbyPluginSharp,
    gatsbyTransformerRemark,
    gatsbyGoogleAnalytics,
    gatsbyPurgeCSS,
    'gatsby-plugin-sitemap',
  ],
};
