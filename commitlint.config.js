module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // Cambios en el sistema de build o dependencias externas
        'chore', // Tareas de mantenimiento, sin impacto en el código fuente
        'ci', // Cambios en la configuración de integración continua
        'docs', // Cambios en la documentación
        'feat', // Nueva funcionalidad
        'fix', // Corrección de errores
        'merge', // Commits de merge (fusión de ramas)
        'perf', // Mejoras de rendimiento
        'refactor', // Refactorización de código (sin cambios funcionales)
        'revert', // Revertir un commit anterior
        'style', // Cambios de formato (espacios, comas, etc.)
        'test', // Agregar o corregir tests
        'wip', // Trabajo en progreso (Work In Progress)
      ],
    ],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [2, 'never'],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    'subject-max-length': [2, 'always', 100],
    'subject-min-length': [2, 'always', 5],
    'body-max-line-length': [2, 'always', 100],
  },
};
