/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"'],
      handwriting: ["Caveat"],
      headline: ["Poppins"],
    },
    extend: {
      colors: {
        //Cores principais
        PRETO: '#000000',
        AZUL: '#5CA9B1',
        BRANCO: '#FFF',

        //Cores secundárias
        ROXO: '#731FFD',
        AMARELO: '#F6D900',
        CINZA: '#E2E2E2',

        //Nuances - Azul
        VERDE_NUANCE_1: '#004242',
        AZUL_NUANCE_2: '#003C60',
        AZUL_NUANCE_3: '#006397',
        AZUL_NUANCE_4: '#0077AF',
        AZUL_NUANCE_5: '#45AED0',

        //Nuances - Roxo
        ROXO_NUANCE_1: '#2E037F',
        ROXO_NUANCE_2: '#4F06B4',
        ROXO_NUANCE_3: '#8619FF',
        ROXO_NUANCE_4: '#A465F3',
        ROXO_NUANCE_5: '#C6ADED',

        //Nuances - Amarelo
        AMARELO_NUANCE_1: '#AB8600',
        AMARELO_NUANCE_2: '#E1B900',
        AMARELO_NUANCE_3: '#F5D842',

        //Nuanecs - Cinza
        CINZA_NUANCE_1: '#7B7B7B',
        CINZA_NUANCE_2: '#ACACAC',
        CINZA_NUANCE_3: '#EBEDEE',
      }
    },
  },
  plugins: [],
}

