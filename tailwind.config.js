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
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        bounceSmall: 'bounceSmall 1.2s ease-in-out infinite',
        rotate: 'rotate 5s linear infinite',
        rotateY: 'rotateY 1.5s linear infinite',
        spin: 'spin 35s linear infinite',
      },

      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
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

