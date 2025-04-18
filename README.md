# 202030235 차민욱

## 2025-04-18

## 한번 더 state 끌어올리기

- 렌더링 중에 계산할 수 있는 충분한 정보가 이미 있는 경우 useState는 필요하지 않다.
- 게임을 다시 실행시키기 위해서는 Game 컴포넌트에서 handlePlay가 호출되어야 한다.
- handlePlay 함수는 리렌더링을 트리거하기 위해 Game의 state를 업데이트해야 하지만, 더 이상 호출할 숴 있는 setSquares 함수가 없다.
- 대신 이 정보를 저장하기 위해 history state 변수를 사용중
- ...history 전개 구문을 사용하면 "history의 모든 항목 열거"로 해석 가능

## 화면이 깨지는 경우

- 이 문제는 Square 컴포넌트에서 < button >을 < div >로 감싸서 생기는 문제이다.
- <>로 감싸거나, < button > 만 남기면 해결된다.
- React Fragment를 사용하면 구조도 깔끔하고, 유지보수도 편해진다.

## 과거 움직임 보여주기

- < Button >과 같은 리액트 속성은 일반 자바스크립트 객체이므로 애플리케이션에서 전달할 수 있음.
- 리액트에서 여러 속성을 렌더링하려면 리액트 속성 배열을 사용할 수 있음
- 이미 state에 이동 history 배열이 있기 때문에 이것을 리액트 속성 배열로 변환해야 한다.
- 자바스크립트에서 한 배열을 다른 배열로 변환하려면 배열 map 메서드를 사용하면 된다.
  ```javascript
  [1, 2, 3].map((x) => x * 2) // [2, 4, 6]
  ```

## 2025-04-17

## state 끌어올리기

- handelClick 함수는 자바스크립트의 silce() 배열 메소드를 사용하여 squres 배열의 사본인 nextSquares를 생성함
- 자바 스크립트는 클로저를 지원하기 때문에 내부 함수(handleClick)가 외부 함수(Board)에 정의된 변수 및 함수에 접근할 수 있음
- handleClick 함수는 squares의 state를 읽고 setSquares 메서드를 호출할 수 있는데, 이 두 함수는 Board 내부에 정의되어 있기 때문임
- Square의 onSquareClick prop를 아래와 같이 jsx에서 직접 handleClick(0)으로 설정할 수 있지만, 이 방법은 작동하지 않음
  ```javascript
  <Square value={squares[0]} onSquareClick={handleClick[0]} />
  ```
- handleClick(0) 호출은 Board 컴포넌트 렌더링의 일부가 되므로 setSquare를 호출하여  Board 컴포넌트의 state를 변경하기 때문에 컴포넌트 전페를 다시 렌더링하게 함, 이로인해 handleClick(0)은 다시 실행이 되면서 무한루프에 빠지게 됨

- 화살표 함수는 함수를 짧게 정의하는 방법이다.
  ```javascript
  export default funtion Board() {
    // ...
    return (
      <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      // ...
    );
  }
  ```
  ### 중요한 점

  - 이제 Board가 모든 state를 관리하므로 부모 Board 컴포넌트는 자식 Square 컴포넌트가 올바르게 표시될 수 있도록 props를 전달
  - Square를 클릭하면 자식 Square 컴포넌트가 부모 Board 컴포넌트에 state를 업데이트 하도록 요청함
  - Board의 state가 변경되면 Board 컴포넌트와 모든 자식 Square 컴포넌트가 자동으로 다시 렌더링
  - Board 컴포넌트에 속한 모든 Square의 state를 유지하면 나중에 승자를 결정할 수 있음

  ### 중요한 점

  - DOM < button > 엘리먼트의 onClick 속성은 빌트인 컴포넌트이기 때문에 리액트에서 특별한 의미를 가짐
  - 사용자 정의 컴포넌트(예: Square)의 이름은 사용자가 원하는 대로 지을 수 있음
  - Square의 onSquareClick prop 이나 Board의 handleClick 함수에 어떠한 이름을 붙여도 코드는 동일하게 작동함
  - 리액트에서는 주로 이벤트를 나타내는 prop에는 onSomething과 같은 이름을 사용하고, 이벤트를 처리하는 함수를 정의 할 때는 handleSomething과 같은 이름을 사용함

## 불변성은 왜 중요한가?

- 일반적으로 데이터를 변경하는 방법은 두 가지가 있다.
  1. 데이터의 값을 직접 변경하여 데이터를 변형
  2. 원하는 변경 사항이 있는 새 복사본으로 데이터를 대체

- 결과는 같으나, 원본 데이터를 직접 변형하지 않음으로써 몇가지 이점을 얻을 수 있음

  1. 불변성을 사용하면 복잡한 기능을 쉽게 구현이 가능
  2. 또 다른 장점 존재
      - 컴포넌트가 데이터의 변경 여부를 저렴한 비용으로 판단 가능

## return의 의미

- 자바스크립트에는 return값이 없는 return은 함수를 즉시 종료하라는 의미

## 구조 분해 할당

- 비구조화 할당, 구조화 할당이라고도 번역되지만 구조 분해 할당을 많이 사용함
- 구화 분해 할당은 배열이나 객체의 구조를 해체해여 내부 값을 개별 변수에 쉽게 할당하는 방법
- 이를 통해 코드의 간결성과 가독성을 높일 수 있음
- map 함수에서도 사용되는 아주 많이 사용되는 방법이다.

- 예시 코드(board.js)

  ```javascript
  function calculatorWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }
  ```

## 2025-04-10

## props를 통해 데이터 전달하기

- React의 component architecure를 사용해서 재사용할 수 있는 component를 만들어서 지저분하고
중복된 코드를 삭제
- component를 호출하는 쪽이 부모 component이다.
- 문자열 value가 아닌 javascript 변수가 렌더링 되어야 한다
- JSX에서 JavaScript로 탈출하려면 중괄호가 필요함, value 주위에 중괄호를 추가

## 사용자와 상호작용하는 컴포넌트 만들기

- 한글 문서에서 "사각형"이라고 번역된 것은 모두 Square 컴포넌트를 의미
- 컴포넌트는 무언가 "기억"하기 위해 state를 사용
- React는 상태 기억을 위해 useState라는 Hook을 제공

  ```javascript
    import { useState } from 'react';

    function Square() {
      const [value, setValue] = useState(null);

      function handleClick() {
        //...
      }
    }
  ```

- value는 값을 저장하는 '변수', setValue는 값을 변경하는 데 사용하는 '함수'

## state 끌어올리기

- 여러 자식 컴포넌트에서 데이터를 수집하거나 두 자식 컴포넌트가 서로 통신 하도록 하려면, 부모 컴포넌트에서 공유 state를 선언해야한다.
- 부모 컴포넌트는 props를 통해 해당 state를 자식 컴포넌트에 전달할 수 있음.
- React 컴포넌트를 리팩토링할 때 부모 컴포넌트로 state를 끌어올리는 것은 많이 사용되는 방법이다.

## component 분리하기

- 분리순서
  - component 이름과 동일한 파일을 만든다.
  - 해당 파일에 코드를 복사하고 export default 키워드를 추가한다.
  - 필요한 component와 useState를 추가한다.
  - App.js에서 해당 코드를 삭제하고, Board component를 import해준다.
  - App.js에서 useState의 import를 제거한다.
  - 정상적으로 동작하는지 확인한다.

## 2025-04-03

## 이벤트에 응답하기

- component 내부에 event handler 함수를 선언하면 event에 응답할 수 있음
- onClick={handleClick}의 끝에 소괄호()가 없는 것을 주목
- 함수를 호출하지 않고 전달만 하면 끝
- React는 사용자가 버튼을 클릭할 때 이벤트 핸들러를 호출

- 실습 코드

  ```javascript
  function MyButton() {
    function handleClick() {
      alert("You clicked me!");
    }

    return (
      <button onClick={handleCilck}>
        "I'm a button"
      </button>
    );
  }
  ```

## 화면 업데이트하기
- component가 특정 정보를 '기억' 해두었다가 표시하기를 원하는 경우가 있음
- 이럴때는 component에 state를 추가하면 됨

  ```javascript
    import { useState } from 'react';
  ```

- useState로부터 현재의 state를 저장할 수 있는 변수인 count와 이를 업데이트할 수 있는 함수인 setCount를 얻을 수 잇음
- 이름은 자유롭게 지정가능하나 [somthing, setSomething]으로 작성하는 것이 일반적
- 변수 이름과 변수 이름 앞에 set을 붙인 업데이트 함수를 관용적으로 사용

- 실습 코드

  ```javascript
    function Button() {
      const [count, setCount] = useState(0);

      function handleClick() {
        setCount(count + 1);
      }

      return (
        <button onClick={handleCilck}>
          Clicked {count} times
        </button>
      );
    }
  ```

## Hook 사용하기

- use로 시작하는 함수를 Hook이라고 함
- useState는 React에서 제공하는 내장 Hook이다.
- 기존의 것들을 조합하여 자신만의 Hook울 작성할 수도 잇음
- 다른 함수보다 더 제한적임
- component 또는 다른 Hook의 상단에서만 호출할 수 있음
- 조건이나 반복문에서 useState를 사용하고 싶다면 새 컴포넌트를 추출해서 그곳에 넣을 것

### Hook의 사용규칙

- Hook은 React의 렌더링 및 상태 관리 메커니즘과 밀접하게 연결되어 있으며, 아래와 같은 규칙을 따른다.

- 최상위에서만 호출해야 한다
  - if, for, while 등의 블록 내부에서 Hooks를 호출하면 안된다.
  - 함수의 조건문 내부에서 호출하면 실행순서가 달라지기 때문

- React 함수형 component 또는 사용자 Hook 내부에서만 사용 가능
  - 일반적인 JavaScript 함수에서 useState, useEffect 등의 Hook을 사용할 수 없음.

### 왜 이런 제한이 필요한가?

- React의 동작을 에측 가능하고, 안정성을 높이기 위해 필요

- 렌더링 순서를 보장하기 위해
  - 조건문이나 반복문 안에서 Hooks를 사용하면 매 렌더링마다 Hooks의 호출 순서가 달라질 수 있기 때문에 React가 상태를 제대로 추적할 수 없음

- 불필요한 사이드 이펙트 방지
  - component가 여러 번 렌더링될 때마다 동일한 순서로 Hook이 실행되어야 React가 의도한 동작을 수행할 수 있음

### 왜 function형 컴포넌트에서만 Hook을 사용할까?

- class형 컴포넌트는 lifecycle 함수를 통해서 상태 관리를 함
- 이러한 이율 class형 컴포넌트는 유지보수가 어렵고 복잡해질 수 있음
- React는 컴포넌트의 상태관리와 로직을 더 간결하게 만들기 위해 Hooks를 도입
- 따라서 React는 function형 컴포넌트를 권장
- Hook은 function형 컴포넌트 전용으로 설게됨

## component간 데이터 공유

- 각 component 객체는 독립적으로 동작한다.
- component는 하나지만 count 변수도 객체로 여러 개 복사된 것이나 마찬가지다.
- component는 외부에서 두 개 호출하는 것이 아닌 내부에서 닽은 count 변수를 사용한다.

## Tic-Tac-toe 만들기

### 코드 생성하기
- 컴포넌트가 너무 많이 있다면 그냥 새 파일을 만들자, 안그러면 꼬인다.
- 아니면 쓸데없는 파일을 정리하자

### 보드 만들기



## 2025-03-27

### React Component의 생성 및 nesting(중첩)

- React앱은 component로 만들어짐

  - component는 고유한 로직과 모양을 가진 UI의 일부
  - component는 버튼처럼 작을 수도 있고, 전체 페이지 처럼 클 수도 있음
  - component는 마크업을 반환하는 javascript 함수이다.

- nesting은 CSS 선택자의 중첩 구조를 생각하면 쉽게 이해가능.
  - CSS중첩 구조는 2023년부터 자체 지원, 이전에는 Sass, Lass등을 이용할 때 사용

    ![](/react-test-app/image/rp11.png)

## export default 선언의 가장 좋은 위치는?

- vscode에서 자동완성 사용 시 맨 아래에 선언이 됨
- 공식처럼 main component의 function 키워드 왼쪽에 선언하는 것을 권장
- 특히 한 파일에 여러개의 component가 있다면 이렇게 하는 것이 가독성에 좋음

- 예제 app.js

  ![](/react-test-app/image/rp12.png)

- export default 키워드는 파일내의 component중 기본 component를 지정

## export default와 export의 차이

- Named Exports (export)
  - 하나의 파일안에 여러 개의 component가 있을 때 사용
  - component를 사용하는 쪽에서는 component의 정확한 이름을 반드시 명시해야 함

- Default Exports (export default)
  - 하나의 파일안에서 하나의 component만 내보내는 경우 사용
  - component를 사용하는 쪽에서는 어떤 이름을 사용해도 상관 없음

- component 분리
  - 반드시 import를 사용하여 로드할 것

## JSX로 마크업 작성하기

```javascript
  function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
      </>
    );
  }
```

- 반드시 사용해야 하는 것은 아니지만, React 프로젝트에서는 편의성을 위해 사용
- HTML보다 더욱 엄격한 문법을 적용
- < br />같이 싱글 태그라도 태그를 닫아야 함
- React에서는 여러개의 component를 JSX태그로 반환이 가능
  - 다만 여러개의 component를 div태그 또는 빈 <>...</> wrapping해 줘야 한다.

## 스타일 추가하기

- React에서는 className으로 CSS 클래스를 지정
- className은 HTML의 class속성과 동일한 방식으로 동작
- CSS 규칙은 별도의 CSS파일에 작성
  - 단, React는 CSS파일을 추가하는 방법을 규정하지는 않음

- 가장 간단한 방법은 HTML에 < link > 태그를 추가하는 것
  - link 추가 시 정적 페이지 수정이 필요하므로 권장하지 않음
- 빌드 도구나 프레임워크 사용 시 프로젝트에 css 파일을 추가

## 데이터 표시하기

- JSX를 사용하면 자바스크립트에 마크업을 넣을 수 있다 -> 반대다
- JSX 코드 내에서 자바스크립트로 "탈출" 하여 변수나 표현식을 사용하는 것
  - 이 방법은 "Escape Back" 이라고 함

- {} 중괄호를 사용하여 변수나 표현식을 사용자에게 표시하도록 하는 것

![](/react-test-app/image/rp13.png)

- 예제 Profile.js
```javascript
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
```

## 조건부 렌더링

- React에서 조건문을 작성하는 데이는 특별한 문법이 필요 없음
- 일반적인 자바스크립트 코드를 작성할 때 사용하는 것과 동일한 방법을 사용함

![](/react-test-app/image/rp14.png)

## 리스트 렌더링하기

- 컴포넌트 리스트를 렌더링하기 위해서는 for문 및 map()함수와 같은 자바스크립트 기능을 사용
- < li >에 key 속성이 있는 것을 주목
- 목록을 사용할 때는 각 항목에 대해 고유하게 식별하는 문자열 또는 숫자를 전달해야 함
- 항목을 삽입, 삭제 또는 재정렬할 때 어떤 일이 일어났는지 알기 위해 key를 사용합니다.
  - 이 것을 key props라고 한다.

  ![](/react-test-app/image/rp15.png)



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

## 의존성 관리와 pakage.json

### 의존성을 관리하는 이유

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

## React(리액트) 개요

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

## Full-Stack-App 개발을 도와주는 React Framework

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

## 모든 플랫폼에서 최고의 성능을 발휘하는 React

### 웹의 본질에 충실하기

- React를 사용하면 서버에서 데이터를 가져오는 동안에도 HTML 스트리밍을 시작할 수 있기 때문에, JavaScript 코드가 로드되기 전에 콘텐츠를 점진적으로 채울 수 있음
- 클라이언트 측에서는 표준 웹 API를 사용하여, 렌더링 도중에도 UI를 반응하도록 할 수 있음

### 진정한 네이티브 UX를 실현

- React Native와 Expo를 사용하면 안드로이드, iOS등을 위한 앱을 React로 빌드할 수 있음
- 웹 뷰가 아닌 플렛폼에서 제공하는 안드로이드, iOS View를 사용하기 때문
- 사용자 경험의 희생 없이 다양한 플랫폼에 앱을 출시할 수 있음
- 기업에서는 플랫폼 간의 장벽을 허물고, 전체 기능을 협업을 통해 개발할 수 있는 팀을 수성할 수 있음

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
