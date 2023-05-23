import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors :{
        "nav":"#EFEFEF",
        "search" : "#fcfad",
        "clima" : "#f7f4e8",
        "mas" : "#99d8f3",
        "footer" : "#4b4b4d",
        "facebook" : "#678bdb"
      },
      fontFamily : {
        "arial" : " Arial, Helvetica, sans-serif;"
      }
    },
  },
  plugins: [],
} satisfies Config