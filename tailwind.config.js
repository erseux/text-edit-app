
module.exports = {

  mode: "jit",
  purge: {
    enabled: true,
    layers: ['components', 'utilities', 'base', "variants"],
    content: [
      "./pages/**/*.{tsx,ts,jsx,js}",
      "./components/**/*.{tsx,ts,jsx,js}",
    ],
  },

  darkMode: false, 
  theme: {
    extend: {
      colors: {
        terra: {
          50: '#FFE018',
          200: '#FFE018',
          300: '#FFE018',
          400: '#FFE018',
          500: '#FFE018',
        },
        sky: {
          300: '#E4EFF4',
          700: '#037B89',
          800: '#03646F',
        },
        blue: {
          700: '#2552AD',
          800: '#1B3D81',
        },
        gray: {
          '50': '#F9FAFB',
          '100': '#F3F4F6',
          '200': '#E5E7EB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',

          light: '#6B7280',
          '500': '#6B7280',

          '600': '#4B5563',
          '700': '#374151',
          mid: '#374151',

          '800': '#1F2937',
          dark: '#1F2937',

          '900': '#111827',
          darkest: '#111827',
        },
      },

      gridTemplateColumns: {
        'auto-200': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
