export default {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
        "^@utils/(.*)$": "<rootDir>/src/utils/$1",
        "^@adapters/(.*)$": "<rootDir>/src/core/adapters/$1",
        "^@components/(.*)$": "<rootDir>/src/components/$1",
        "^@pages/(.*)$": "<rootDir>/src/pages/$1",
        "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
        "^@domain/(.*)$": "<rootDir>/src/core/domain/$1",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
