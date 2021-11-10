const postcssJitProps = require('postcss-jit-props')
const postcssNesting = require('postcss-nesting')
const postcssCustomMedia = require('postcss-custom-media')
const postcssMediaRanges = require('postcss-media-minmax')
const postcssImport = require('postcss-import')
const postcssCQFill = require('cqfill/postcss')

const OpenProps = require('@argyleink/open-props')

module.exports = {
  plugins: [
    postcssImport({ path: ['src'] }),
    postcssCustomMedia({
      importFrom: [
        {
          customMedia: {
            '--xs': '(width >= 600px)',
            '--sm': '(width >= 720px)',
            '--md': '(width >= 1024px)',
            '--lg': '(width >= 1400px)',
            '--xl': '(width >= 1600px)',
            '--motionOK': '(prefers-reduced-motion: no-preference)',
            '--dark': '(prefers-color-scheme: dark)',
            '--light': '(prefers-color-scheme: light)',
          }
        }
      ]
    }),
    postcssMediaRanges(),
    postcssJitProps(OpenProps),
    postcssNesting(),
    postcssCQFill(),
  ],
}
