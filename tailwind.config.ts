import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#08080A',
        surface: '#111116',
        border: '#1E1E28',
        violet: {
          DEFAULT: '#8B5CF6',
          dim: '#6D28D9',
          glow: '#A78BFA',
        },
        amber: {
          DEFAULT: '#F59E0B',
          dim: '#D97706',
          glow: '#FCD34D',
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#A1A1AA',
          muted: '#52525B',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%23ffffff08' stroke-width='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
