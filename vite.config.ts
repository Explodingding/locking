import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ustawienie katalogu bazowego dla produkcji (na Netlify możemy ustawić '/')
  base: '/',
})
