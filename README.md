# 202030235 차민욱

## 2025-03-20

### React Project의 구조 및 역할

![](/react-test-app/image/rp1.png)

- node_modules

  - 초기 node_module 및 새로 설치하는 패키지가 저장됨
  - 엄청난 양의 파일이 존재
  - git으로 관리하지 않으므로 디렉토리 이름이 흐릿하게 나와있음

- public

  - 정적(static) 파일을 저장하는 디렉토리
  - build 후 배포할 html, CSS, JavaScript 등이 보관되는 곳
  - 개발하면서 특별히 수정할 코드 없음

- public/index.html

- src

  - React 프로젝트의 주요코드가 위치한 디렉토리
  - 개발 하면서 대부분의 작업이 이루어지는 곳

- src/App.js

  - 메인 component로 필요한 sub component를 모아서 관리
  - 출력을 위해서 index.js로 전달됨

- src/App.css

  - App.js에 적용되는 스타일 정의하는 스타일 파일

- src/index.js

  - React 앱의 진입점으로 최종 렌더링이 되는 곳
  - ReactDOM.createRoot를 사용하여 App.js를 렌더링

- src/index.css
  - 전역 스타일을 정의하는 파일

## 2025-03-13

### Node.js?

- 2009년 라이언 달에 의해 개발된 툴
- 본래 파이썬을 사용했으나 현재는 자바스크립트로 방향을 전환
- 웹 서버 개발, 실시간 애플리케이션, 서버리스 환경등에 사용

### Node.js는 왜 인기있는가?

- 빠른 성능, 풀스택개발, 활발한 생태계, 실시간 애플리케이션에 강함, 조화로운 연동

### Node.js의 장단점

- 장점

  - javascript 풀스택 개발 가능
  - 경량 서버 개발에 적합
  - 실시간 데이터 처리능력이 강함

- 단점
  - 멀티스레드 성능이 부족함
  - 콜백 지옥 문제
  - 보안에 취약함

### React

- 현재 최신 버전은 2024년 12월 5일 공개된 19.0.0 버전이다.

### 개발 환경 조성

- Node.js 버전 8.2.0 이상 설치 시 npm과 npx는 자동으로 설치 된다.
- 그 외 코드에디터, 웹 브라우저만 설정하면 끝

### React 설치 및 실행

```
npx create-react-app <프로젝트 이름>
npm start
```
