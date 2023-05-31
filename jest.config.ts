export default {
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest/presets/js-with-ts",
  setupFiles: ["dotenv/config"],
  modulePaths: ["node_modules", "./src"],
  transform: {
    "^.+\\.mjs$": "ts-jest",
  },
};
