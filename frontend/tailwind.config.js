/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // src/app 内の全ての JavaScript, TypeScript, JSX, TSX ファイル
    './src/pages/**/*.{js,ts,jsx,tsx}', // src/pages 内の全ての JavaScript, TypeScript, JSX, TSX ファイル
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
