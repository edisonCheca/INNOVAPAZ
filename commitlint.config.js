module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // Cambios en build o dependencias
        'chore', // Tareas de mantenimiento
        'ci', // Cambios en CI/CD
        'docs', // Documentación
        'feat', // Nueva funcionalidad
        'fix', // Corrección de bugs
        'hotfix', // Corrección urgente en producción
        'merge', // Integración de ramas y resolución de conflictos
        'perf', // Mejoras de rendimiento
        'refactor', // Refactoring sin cambio funcional
        'release', // Preparación de release
        'revert', // Revertir commits
        'security', // Correcciones de seguridad
        'style', // Cambios de formato (espacios, etc)
        'test', // Agregar o corregir tests
        'update', // Actualización de dependencias
        'wip', // Work in progress (solo en desarrollo)
      ],
    ],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    'subject-max-length': [2, 'always', 100],
    'subject-min-length': [2, 'always', 3],
    'body-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'type-case': [2, 'always', 'lower-case'],
    'scope-empty': [1, 'never'],
  },
};

// Ej. feat(auth): add login.
