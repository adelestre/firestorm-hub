/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}']
export const darkMode = 'class'
export const theme = {
  fontFamily: {
    eco: ['Economica', 'sans-serif'],
    assistant: ['Assistant', 'sans-serif'],
  },
  extend: {
    colors: {
      white: '#ffffff',
      'light-primary-0': '#f8f8f8', // Zinc-50
      'light-primary-1': '#f4f4f5', // Zinc-100
      'light-primary-2': '#e4e4e7', // Zinc-200
      'light-primary-3': '#d4d4d8', // Zinc-300
      'light-primary-4': '#a1a1aa', // Zinc-400
      'light-secondary-0': '#09090b', // Zinc-950
      'light-secondary-1': '#18181b', // Zinc-900
      'light-secondary-2': '#27272a', // Zinc-800
      'light-secondary-3': '#3f3f46', // Zinc-700
      'light-secondary-4': '#52525b', // Zinc-600
      'light-accent-1': 'var(--accent-1)',
      'light-accent-2': 'var(--accent-2)',
      'light-accent-3': 'var(--accent-3)',
      'light-accent-4': 'var(--accent-4)',
      'light-accent-5': 'var(--accent-5)',
      'light-accent-6': 'var(--accent-6)',
      'light-green-1': '#16a34a', // Green-600
      'light-green-2': '#22c55e', // Green-500
      'light-green-3': '#4ade80', // Green-400
      'light-green-4': '#bbf7d0', // Green-300
      'light-green-5': '#dcfce7', // Green-200
      'light-green-6': '#f0fdf4', // Green-50

      neutral: '#71717a', // Zinc-500

      'dark-primary-0': '#141417', // Zinc-920
      'dark-primary-1': '#18181b', // Zinc-900
      'dark-primary-2': '#27272a', // Zinc-800
      'dark-primary-3': '#3f3f46', // Zinc-700
      'dark-primary-4': '#52525b', // Zinc-600
      'dark-secondary-0': '#fafafa', // Zinc-50
      'dark-secondary-1': '#f4f4f5', // Zinc-100
      'dark-secondary-2': '#e4e4e7', // Zinc-200
      'dark-secondary-3': '#d4d4d8', // Zinc-300
      'dark-secondary-4': '#a1a1aa', // Zinc-400
      'dark-accent-1': 'var(--accent-1)',
      'dark-accent-2': 'var(--accent-2)',
      'dark-accent-3': 'var(--accent-3)',
      'dark-accent-4': 'var(--accent-4)',
      'dark-accent-5': 'var(--accent-5)',
      'dark-accent-6': 'var(--accent-6)',
      'dark-green-1': '#16a34a', // Green-600
      'dark-green-2': '#22c55e', // Green-500
      'dark-green-3': '#4ade80', // Green-400
      'dark-green-4': '#bbf7d0', // Green-300
      'dark-green-5': '#dcfce7', // Green-200
      'dark-green-6': '#f0fdf4', // Green-50
    },
    screens: {
      xs: '400px',
    },
    boxShadow: {
      img: 'inset 0px 0px 30px 15px #000000',
      'md-left': '-4px 3px 6px -1px rgb(0 0 0 / 0.1)',
    },
  },
}
export const plugins = [
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
  require('tailwind-scrollbar')({
    nocompatible: true,
    preferredStrategy: 'pseudoelements',
  }),
  'prettier-plugin-tailwindcss',
  function ({ addVariant }) {
    addVariant('not-last', '&:not(:last-child)')
  },
]
