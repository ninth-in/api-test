import { Config } from '@jest/types'
//import { pathsToModuleNameMapper } from 'ts-jest/utils'
//import { compilerOptions } from './tsconfig.json'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  //moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules'],
  testMatch: ['<rootDir>/**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
}

export default config
