module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  testMatch: ['**/*.spec.ts'],
  transformIgnorePatterns: ['node_modules/(?!(axios)/)'],
};
