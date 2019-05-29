module.exports = {
  // Tailwind Paths
  configJS: './src/tailwind.config.js',
  sourceCSS: './src/tailwind.scss',
  outputCSS: './src/index.scss',
  // Sass
  sass: true,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: [
    '.ts',
    '.html',
    '.js'
  ],
  extractors: [],
  content: []
}
