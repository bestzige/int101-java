export const useBestZige = () =>
  useState(() => ({
    page: 'home',
    pages: [
      {
        path: 'home',
        title: 'Home'
      },
      {
        path: 'introduction',
        title: 'Introduction'
      },
      {
        path: 'concept',
        title: 'Concept'
      },
      {
        path: 'syntax',
        title: 'Syntax'
      },
      {
        path: 'variable',
        title: 'Variable'
      },
      {
        path: 'datatypes',
        title: 'Data Types'
      },
      {
        path: 'mathoperators',
        title: 'Math Operators'
      },
      {
        path: 'classcomponent',
        title: 'Class Component'
      }
    ],
    javaKeyword: [
      'abstract',
      'assert',
      'boolean',
      'break',
      'byte',
      'case',
      'catch',
      'char',
      'class',
      'continue',
      'default',
      'do',
      'double',
      'else',
      'enum',
      'extends',
      'final',
      'finally',
      'float',
      'for',
      'if',
      'implements',
      'import',
      'instanceof',
      'int',
      'interface',
      'long',
      'native',
      'new',
      'null',
      'package',
      'private',
      'protected',
      'public',
      'return',
      'short',
      'static',
      'strictfp',
      'super',
      'switch',
      'synchronized',
      'this',
      'throw',
      'transient',
      'try',
      'void',
      'volatile',
      'while'
    ]
  }));
