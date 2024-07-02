// /// <reference types="vitest" />
// import { defineConfig, UserConfig} from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// import { configDefaults } from '@vitest/config';

// export default defineConfig({
//   plugins: [react()] as UserConfig['plugins'],
//   test: {
//     environment: 'jsdom',
//     globals: true,
//     coverage: {
//       provider: 'v8',
//     },
//     reporters: ['verbose'],
//     exclude: [
//       ...configDefaults.exclude,
//       './src/__tests__/integration/home.test.tsx',
//       './src/__tests__/App.test.tsx',
//     ],

//     setupFiles: './test-setup.ts',
//   },

//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// });
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
    },
    reporters: ['verbose'],
    exclude: [
      './src/__tests__/integration/home.test.tsx',
      './src/__tests__/App.test.tsx',
    ],
    setupFiles: ['./test-setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
