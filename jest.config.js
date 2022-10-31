const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // @svgr/webpack
    '\.svg$': '<rootDir>/__mocks__/svg.js',
    // Module aliases
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^@/styles/(.*)$': '<rootDir>/styles/$1',
    // ESM modules,
    'multiformats/basics': '<rootDir>/node_modules/multiformats/cjs/src/basics.js',
    'multiformats/cid': '<rootDir>/node_modules/multiformats/cjs/src/cid.js',
    multiformats: '<rootDir>/node_modules/multiformats/cjs/src/index.js',
    uint8arrays: '<rootDir>/node_modules/uint8arrays/cjs/src/index.js',
    '@ipld/dag-cbor': '<rootDir>/node_modules/@ipld/dag-cbor/cjs/index.js',
    cborg: '<rootDir>/node_modules/cborg/cjs/cborg.js',
  },
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  fakeTimers: {
    enableGlobally: true,
  },
}

// createJestConfig is exported this way to ensure that
// next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
