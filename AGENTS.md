# 프로젝트 작업 규칙

- Vanilla JavaScript와 Vite를 사용한다.
- HTML, CSS, JavaScript는 각각 분리된 파일로 작성한다.
- `index.html`은 프로젝트 루트에 둔다.
- 애플리케이션 CSS와 JavaScript는 `src` 폴더에 둔다.
- `vite.config.js` 등 설정 파일은 프로젝트 루트에 둔다.
- JavaScript는 ES 모듈 방식으로 연결한다.
- CSS는 JavaScript 진입 파일에서 `import`하여 Vite 빌드에 포함한다.
- 외부 JavaScript 라이브러리는 `npm install`로 설치한 후 모듈로 import한다. CDN은 사용하지 않는다.
- 기존 파일과 설정을 먼저 확인하고, 필요한 부분만 수정한다.
- 배포 빌드는 `npm run build`로 실행하며 출력 폴더는 `dist`를 사용한다.
