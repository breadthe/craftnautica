module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production' ? [
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.vue', './public/**/*.html'],
        whitelist: ['w-6', 'h-6', 'w-10', 'h-10', 'text-grey-darker'],
        extractors: [
          {
            extractor: class {
              static extract(content) {
                return content.match(/[a-zA-Z0-9-:_/]+/g) || [];
              }
            },
            extensions: ['vue', 'html'],
          },
        ],
      })
    ] : [],
  ]
}
