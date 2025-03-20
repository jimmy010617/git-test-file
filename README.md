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

  - React앱이 마운트되는 HTML파일

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

### 의존성 관리와 pakage.json

- pakage.json은 패키지의 의존성을 관리하는 파일
- 의존성(Dependency)이란, 하나의 소프트위어가 다른 소프트웨어에 의존하여 동작하는 관계
- 어떤 프로젝트에 사용된 각종 패키지등의 버전을 동일하게 유지하기 위한 것
- 협업 시 팀원들 각자의 컴퓨터에 같은 패키지들을 설치해서 동일한 개발환경을 구성
- 코드는 GitHub, GitServer를 이용하지만, node 패키지는 각자 설치해야 함
- 의존성을 무시하면 버전이 동일하지 않아 프로젝트에 차질이 생김
- 이는 개인의 경우에도 마찬가지임

![](/react-test-app/image/rp2.png)

- package.json의 의존성 내용의 종류
  - dependencies : 실제 코드에서 사용하는 라이브러리
  - devDependencies : 개발할 때만 필요한 라이브러리들
  - pperDependencies : 필요한 라이브러리만, 직접 설치하지 않고 사용자에게 설치를 맡기는 경우
  - optionalDependencies : 있어도 되고 없어도 되는 선택적 의존성

### pakage.json과 package-lock.json의 차이

![](/react-test-app/image/rp3.png)

- 팀 프로젝트에서는 package-lock.json을 유지하는 것이 중요함

### package.json을 유지해야 하는 이유

- 프로젝트의 의존성 정보 제공

  - 프로젝트에서 어떤 패키지를 사용하는지 정의하는 역할
  - 어떤 패키지를 설치해야 하는지 알 수 있는 기준이 됨

- 버전 범위 설정 가능

  - 최신 패치 버전을 허용할 수도 있고, 정확한 버전만 고정할 수도 있음
  - 개발자가 원하는 방식으로 유연하게 관리 가능

- 스크립트와 메타데이터 저장

  - "scripts" 속성을 이용해 빌드, 테스트, 실행 등의 명령어를 저장할 수 있음
  - 프로젝트 실행을 위해서는 반드시 필요

- 새로운 패키지 설치 및 관리

  - 패키지를 설치하면 package.json에 추가되고, package-lock.json에 정확한 버전이 기록됨
  - package.json이 파일 없다면, 새로운 패키지 추가가 불가능

### node_module의 재설치

- 재설치 해야하는 상황

  - 팀 작업을 하면서 GitHub로 부터 다른 프로젝트 파일을 clone 했을 경우
  - 개인이 자신의 프로젝트를 다른 PC 등에서 clone을 받아 계속 개발해야 하는 경우
  - 프로젝트에 문제가 생겨서 node_module을 다시 설치해야 하는 경우

- clone을 받은 프로젝트의 경우

  - 다음 명령을 실행하면 package.json과 package-lock.json을 참고하여 패키지를 다시 설치

    ```
    npm install
    ```

  - node_module 디렉토리는 자동으로 생성됨
  - 설치가 끝나면 프로젝트를 다시 실행

- 프로젝트에 오류나 의존성 등의 문제가 생겼을 경우

  ```
  rm -rf node_modules package-lock.json
  ```

- npm 패키지의 임시 저장소인 캐시를 초기화

  ```
  npm cache clean --force
  ```

- 패키지를 재설치
  ```
   npm install
  ```

### package-lock.json을 삭제하는 이유

- package-lock.json이 손상되거나, 잘못된 의존성이 있을 때
- 최신 버전의 패키지를 다시 받고 싶을 때
- 팀 프로젝트에서 다른 팀원이 이상한 상태로 package-lock.json을 업데이트 했을 때

### React(리액트) 개요

- React는 component 단위로 개발하여 레고를 조립하듯이 앱을 완성함
- component는 작은 기능을 실행할 수 있는 하나의 모듈

### Component를 사용한 유저 인터페이스 생성

- 사용자 인터페이스 구축

  - 예제 Video.js

    ```javascript
    function Video({ video }) {
      return (
        <div>
          <Thumbnail video={video} />
          <a href={video.url}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </a>
          <LikeButton video={video} />
        </div>
      );
    }
    ```

    ![](/react-test-app/image/rp7.png)

- React 사용시 component라고 하는 개별 조각으로 사용자 인터페이스 구축가능
- component의 이름은 파일 이름과 동일하게 하며, 영문 대문자로 시작함
- React는 개인, 팀, 조직에서 작성한 component를 원활하게 결합할 수 있도록 설계됨

### Component를 작성하는 JavaScript와 Markup

- React component는 JavaScript 함수다
- 조건에 따라 화면을 다르게 표시하고 싶다면 if문을 사용
- 목록을 표시하고 싶다면 map()함수를 이용하면 됨
- 예제 VideoList.js

  ```javascript
  function VideoList({ videos, emptyHeading }) {
    const count = videos.length;
    let heading = emptyHeading;
    if (count > 0) {
      const noun = count > 1 ? "Videos" : "Video";
      heading = count + " " + noun;
    }
    return (
      <section>
        <h2>{heading}</h2>
        {videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </section>
    );
  }
  ```

  ![](/react-test-app/image/rp8.png)

- React에서 사용되는 마크업을 JSX라고 함
- JSX는 React를 통해 대중화된 JavaScript 확장 문법
- JSX 마크업을 관련된 렌더링 로직과 가까이 두면, component를 쉽게 생성, 관리, 삭제 할 수 있음

### 필요한 곳에 상호작용 기능 추가

- React component는 데이터를 수신하고, 화면에 표시해야 하는 내용을 반환
- 사용자의 입력을 받아 새로운 데이터를 component에 전달할 수 있음
- 이때 React는 상호작용을 통해 얻은 새 데이터로 화면을 업데이트
- 예제 SearchableVideoList.js

  ```javascript
  import { useState } from "react";

  function SearchableVideoList({ videos }) {
    const [searchText, setSearchText] = useState("");
    const foundVideos = filterVideos(videos, searchText);
    return (
      <>
        <SearchInput
          value={searchText}
          onChange={(newText) => setSearchText(newText)}
        />
        <VideoList
          videos={foundVideos}
          emptyHeading={`No matches for “${searchText}”`}
        />
      </>
    );
  }
  ```

  ![](/react-test-app/image/rp9.png)

### Full-Stack-App 개발을 도와주는 React Framework

- React는 라우팅이나 데이터를 가져오는 방법을 규정하지 않음
- React로 완전한 앱을 만들기 위해서는 Next.js, Remix같은 풀스택 React 프레임워크를 준비해야 함
- 예제 confs/[slug].js

  ```javascript
  import { db } from "./database.js";
  import { Suspense } from "react";

  async function ConferencePage({ slug }) {
    const conf = await db.Confs.find({ slug });
    return (
      <ConferenceLayout conf={conf}>
        <Suspense fallback={<TalksLoading />}>
          <Talks confId={conf.id} />
        </Suspense>
      </ConferenceLayout>
    );
  }

  async function Talks({ confId }) {
    const talks = await db.Talks.findAll({ confId });
    const videos = talks.map((talk) => talk.video);
    return <SearchableVideoList videos={videos} />;
  }
  ```

  ![](/react-test-app/image/rp10.png)

- React는 아키텍쳐이기도 함
- 이를 구현하는 프레임워크는 서버에서 실행되거나 비동기 component에서 데이터를 가지고 올 수 있도록 함
- 파일이나 데이터베이스에서 데이터를 읽고, 이를 상호작용하는 component에 전달할 수 있음
- React를 사용하면 동일한 기술을 사용하여, 웹 앱과 네이티브 앱을 모두 구축가능
- 각 플랫폼의 고유한 강점을 활용하여 모든 플랫폼 잘 어울리는 인터페이스를 구현할 수 있음

### 웹의 본질에 충실하기

- React를 사용하면 서버에서 데이터를 가져오는 동안에도 HTML 스트리밍을 시작할 수 있기 때문에, JavaScript 코드가 로드되기 전에 콘텐츠를 점진적으로 채울 수 있음
- 클라이언트 측에서는 표준 웹 API를 사용하여, 렌더링 도중에도 UI를 반응하도록 할 수 있음

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
