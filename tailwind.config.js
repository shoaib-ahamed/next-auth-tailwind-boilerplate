/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FFFFFF',
          dark: '#000000'
        },
        winterSky: '#FF357F',  //Primary interactive color
        bitterLime: '#BBF025',
        bluetiful: '#1161F5', //Secondary interactive color
  
        // secondary color pallate
        jet: '#2F2F2F',  //Tertiary button background ||  Container background, Secondary page background
        orangePantone: '#F75C03', //Danger button/text/icon/border
        Cultured: '#F4F4F4',
        forestGreen : '#2A9134',
        Onyx: '#3D3D3D',
        davysGrey: '#525252',
        gainsboro: '#E0E0E0',
        silver: '#C6C6C6',
        silverChalice: '#A8A8A8',
        sonicSilver: '#6F6F6F'
      }
    },
  },
  plugins: [],
}
