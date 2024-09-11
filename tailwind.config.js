/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceSmall: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        rotate: {
          '0%': { backgroundPositionx: '-200% 0' },
          
        },
      },
      animation: {
        bounceSmall: 'bounceSmall 1.2s ease-in-out infinite',
        rotate: 'rotate 5s linear infinite',
      },

      fontFamily: {
        playfair: ["Playfair Display", 'serif'],
        merriweather: ["Merriweather", "serif"],
        roboto: ["Roboto", "sans-serif"],
        redhat: ["Red Hat Text", "sans-serif"]
      },
      colors: {
        navbar: 'rgba(255,255,255,0.04)',
      },
      backdropBlur: {
        'custom-blur': '100px',
      },
    },
  },
  plugins: [

  ],
}

