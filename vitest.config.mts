import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [ tsconfigPaths(), react() ],
  test: {
    globals: true,                    // 테스트 파일의 전역 함수를 import 없이 사용할 수 있게하는 옵션
    environment: 'jsdom',             // 테스트 환경 지정하는 옵션
    setupFiles: [ './src/__tests__/setupTests.tsx' ],  // 테스트 전에 실행될 파일을 지정하는 옵션
    benchmark: {
      include: [ '**/*.{bench,benchmark}.?(c|m)[jt]s?(x)' ]
    },
    coverage: {
      provider: 'v8', // V8 커버리지 사용
      reporter: [ 'lcov' ], // 텍스트 + lcov + html 형식 리포트 생성
      reportsDirectory: 'coverage' // 커버리지 파일이 생성될 디렉토리
    }
  }
});
