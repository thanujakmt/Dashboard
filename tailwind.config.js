
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'gray' : 'hsl(234, 14%, 14%)',
        'light_gray' : 'hsl(220, 7%, 17%)',
        'very_light_grat' : 'hsl(223, 5%, 28%)',
        'very_light_grat1': 'hsl(233, 3%, 52%)',
        'very_light_grat2' : 'hsl(220, 4%, 68%)',
        'black' : 'hsl(260, 7%, 8%)',
        'sky_blue' : 'hsl(226, 97%, 72%)',
        'background_blue' : 'hsl(229, 42%, 28%)',
        'blue' : 'hsl(229, 96%, 62%)',
        'green' : 'hsl(163, 87%, 40%)',
        'lightgreen' : 'hsl(109, 75%, 66%)',
        'backgorundgreen' : 'hsl(169, 61%, 20%)',
        'red' : 'hsl(0, 87%, 66%)',
        'backgroundred' : 'hsl(353, 31%, 28%)',
        'pink' : 'hsl(326, 69%, 57%)',
        'backgroundpink' : 'hsl(320, 36%, 26%)',
        'very_light_blue' : 'rgb(68, 141, 185)',
        'backgroundvery_light_blue' : 'rgb(32, 75, 97)'
      }
    },
  },
  plugins: [],
}
