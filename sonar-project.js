// eslint-disable-next-line @typescript-eslint/no-require-imports
const scanner = require('@sonar/scan').default;

scanner(
  {
    serverUrl: 'https://sonarcloud.io',
    token: process.env.SONAR_TOKEN, // 반드시 환경 변수로 주입해야 함
    options: {
      'sonar.organization': 'devs32', // SonarCloud 조직 이름
      'sonar.projectKey': 'Devs32_invu-client', // 프로젝트 키
      'sonar.exclusions': 'node_modules/**, .next/**, out/**',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.sources': './src/app',
      'sonar.tests': './src/__tests__'
    }
  },
  () => process.exit()
);
