export default {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '../../../test/__mocks__/fileMocks.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
    testMatch: ['**/src/**/?(*.)+(spec|test).[jt]s?(x)'],
}
