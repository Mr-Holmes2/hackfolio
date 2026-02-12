/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#04070f',
        neonBlue: '#63f4ff',
        neonPurple: '#8f6bff',
        softText: '#9db0d5'
      },
      boxShadow: {
        neon: '0 0 30px rgba(99, 244, 255, 0.35)',
        glass: '0 10px 35px rgba(6, 15, 34, 0.45)'
      },
      backgroundImage: {
        cyber: 'radial-gradient(circle at 20% 10%, rgba(111,146,255,.18), transparent 30%), radial-gradient(circle at 80% 20%, rgba(99,244,255,.14), transparent 28%)'
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        blink: 'blink 1s steps(1, end) infinite',
        marquee: 'marquee 22s linear infinite',
        float: 'float 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
