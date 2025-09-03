import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['**/dist', '**/node_modules', '**/build'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['apps/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Reglas personalizadas para el monorepo
  '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-explicit-any': 'warn',
  'prefer-const': 'warn',
  'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  // Configuración específica para archivos de configuración
  {
    files: ['**/vite.config.ts', '**/eslint.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  }
);
