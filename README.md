# 202030235 차민욱

## 2025-06-05

## 기존 프로젝트에 리액트 추가 2

[2단계: 페이지 어디에서든 React 컴포넌트 렌더링하기]
- 기존에 존재하던 index.html의 원본 HTML 컨텐츠가 그대로 남아있는 것을 확인할 수 있다. 
- 하지만 이제는 <nav id="navigation"> 안에 개발자가 직접 작성한 NavigationBar React 컴포넌트가 나타난다. 

- 기존 프로젝트에서 React를 도입할 때, 일반적으로 작은 상호작용 컴포넌트(예시: 버튼)에서 시작하여
점진적으로 “상위 구조로 확장하면서” 결국에는 전체 페이지가 React로 빌드될 때까지 이 과정을 반복하게 된다. 
- 이 지점에 도달한다면 React의 장점을 최대한 활용하기 위해 React 프레임워크로 마이그레이션하는 것을 권장함.

## 기존 네이티브 모바일 앱에서 React Native 사용하기

- React Native 역시 기존 네이티브 앱에 점진적으로 통합할 수 있다.

## 에디터 설정하기

- VS Code는 현재 가장 많이 사용하는 에디터 중 하나이다. 
- VS Code에 설치할 수 있는 확장(Extension)의 종류는 무수히 많으며, 깃허브(GitHub)와 같은 외부 서비스와의 연동도 지원한다. 
- 아래에 나열한 기능들은 대부분 확장(Extension)으로 존재하기 때문에 VS Code의 설정을 다양한 방식으로 쉽게 변경할 수 있다.

- 이 외에도 React 커뮤니티에서는 다음과 같은 에디터들을 자주 사용한다.

  - WebStorm은 자바스크립트(JavaScript)에 특화되어 설계된 통합 개발 환경이다.
  - Sublime Text는 JSX와 타입스크립트(TypeScript)를 지원하며 문법 강조 및 자동 완성 기능이 내장되어 있다.
  - Vim은 모든 종류의 텍스트를 매우 효율적으로 생성하고 변경할 수 있도록 설계된 텍스트 편집기다. 대부분의 UNIX 시스템과 Apple OS X에 “vi”로 포함되어 있다.

## 에디터 기능 추천

- 린팅(Linting) : 코드 린터(Linter)는 코드를 작성하는 동안 실시간으로 문제를 찾아, 빠른 문제 해결을 돕는다. 자바스크립트를 위한 오픈 소스 린터(Linter)인 ESLint를 가장 많이 사용한다.

- 포맷팅(Formatting) : Prettier를 사용하면 직접 지정해 놓은 규칙들에 부합하도록 코드의 형식을 깔끔하게 정리할 수 있다. Prettier를 실행하면 모든 탭은 공백으로 전환될 뿐만 아니라 들여쓰기, 따옴표 형식과 같은 요소들이 전부 설정에 부합하도록 수정된다.

- 저장 시점에 포맷팅하기 
  - 저장할 때마다 코드가 포맷팅 되는 것이 가장 이상적일 것이다. 이러한 설정은 VS Code에 자체적으로 내장되어 있다.

## TypeScript 사용하기

- TypeScript는 JavaScript 코드 베이스에 타입 정의를 추가하는 데 널리 사용되는 방법이다.
- 기본적으로 TypeScript는 JSX를 지원하며, @types/react 및 @types/react-dom을 추가하면 완전한 React Web 지원을 받을 수 있다.

## 기존 React 프로젝트에 TypeScript 추가하기

  ```javascript
  npm install @types/react @types/react-dom
  ```
- 다음 컴파일러 옵션을 tsconfig.json에 설정해야 한다.

  - dom은 lib에 포함되어야 한다(주의: lib 옵션이 지정되지 않으면, 기본적으로 dom이 포함된다).
  - jsx를 유효한 옵션 중 하나로 설정해야 한다.

## React 컴포넌트가 있는 TypeScript

- React와 함께 TypeScript를 작성하는 것은 React와 함께 JavaScript를 작성하는 것과 매우 유사하다. 
- 컴포넌트로 작업할 때 가장 중요한 차이점은 컴포넌트의 props에 타입을 제공할 수 있다는 점이다. 
- 이러한 타입은 에디터에서 정확성을 검사하고 인라인 문서를 제공하는 데 사용할 수 있다.

## Hooks 예시

- @types/react의 타입 정의에는 내장 Hooks에 대한 타입이 포함되어 있으므로 추가 설정 없이 컴포넌트에 사용할 수 있다. 
- 컴포넌트에 작성한 코드를 고려하도록 만들어졌기 때문에 대부분의 경우 추론된 타입을 얻을 수 있으며, 이상적으로는 타입을 제공하는 사소한 작업을 처리할 필요가 없다.

- 하지만, hooks에 타입을 제공하는 방법의 몇 가지 예시를 볼 수 있다.

  - useState : useState hook은 초기 state로 전달된 값을 재사용하여 값의 타입을 결정한다.

  - useReducer : useReducer Hook은 reducer 함수와 초기 state를 취하는 더 복잡한 Hook이다. reducer 함수의 타입은 초기 state에서 추론된다. state에 대한 타입을 제공하기 위해 useReducer 호출에 타입 인수를 선택적으로 제공할 수 있지만, 대신 초기 state에서 타입을 설정하는 것이 더 좋은 경우가 많다.

  - useContext : useContext Hook은 컴포넌트를 통해 props를 전달할 필요 없이 컴포넌트 트리를 따라 데이터를 전달하는 기술이다. Provider 컴포넌트를 생성할 때 사용되며, 종종 자식 컴포넌트에서 값을 소비하는 Hook을 생성할 때 사용된다.

  - useMemo : useMemo Hooks는 함수 호출로부터 memorized 된 값을 생성/재접근하여, 두 번째 매개변수로 전달된 종속성이 변경될 때만 함수를 다시 실행한다. Hook을 호출한 결과는 첫 번째 매개변수에 있는 함수의 반환 값에서 추론된다. Hook에 타입 인수를 제공하여 더욱더 명확하게 할 수 있다.

  - useCallback : useCallback는 두 번째 매개변수로 전달되는 종속성이 같다면 함수에 대한 안정적인 참조를 제공한다. useMemo와 마찬가지로, 함수의 타입은 첫 번째 매개변수에 있는 함수의 반환 값에서 추론되며, Hook에 타입 인수를 제공하여 더욱더 명확하게 할 수 있다.

- 몇 가지 주요 위치에서 TypeScript를 사용하고 있다.

  - interface State는 reducer state의 모양을 설명한다.
  - type CounterAction은 reducer에 dispatch 할 수 있는 다양한 액션을 설명한다.
  - const initialState: State는 초기 state의 타입을 제공하고, 기본적으로 useReducer에서 사용하는 타입도 제공한다.
  - stateReducer(state: State, action: CounterAction): State는 reducer 함수의 인수와 반환 값의 타입을 설정한다.

## React 개발자 도구

- 브라우저 확장 프로그램 : React로 빌드된 웹 사이트를 디버깅하는 가장 쉬운 방법은 React 개발자 도구 브라우저 확장 프로그램을 설치하는 것이다. 널리 사용되는 여러 브라우저에서 사용할 수 있다.
- Safari 및 기타 브라우저 : 다른 브라우저(예: Safari)의 경우, react-devtools를 npm 패키지로 설치해야 한다.

  ```javascript
  # Yarn
  yarn global add react-devtools

  # npm
  npm install -g react-devtools
  ```

## 2025-05-29

## 처음부터 리액트 앱 만들기 2

- 스트리밍 서버 측 렌더링(SSR)은 서버에서 페이지를 렌더링하라고 오나전히 렌더링된 페이지를 클라이언트로 전송한다.
  - SSR은 성능을 향상시킬 수 있지만, 단일 페이지 앱보다 설정 및 유지 관리가 더 복잡할 수 있다.
  - 특히 스트리밍 기능이 추가되면 SSR은 설정 및 유지 관리가 매우 복잡해질 수 있다.

- 정적 사이트 생성(SSG)은 빌드 시점에 앱의 모든 정적 HTML 파일을 생성한다.
  - SSG는 성능을 향상시킬 수 있지만, 서버 측 렌더링(SSR)보다 설정 및 유지 관리가 더 복잘할 수 있다. 

- React Server Component(RSC)를 사용하면 빌드 타임, 서버 전용, 인터랙티브 컴포넌트를 단일 리액트 트리에 포함할 수 있다.
  - RSC는 성능을 향상시킬 수 있지만, 현재 설정 및 유지 관리에 대한 전문 지식이 필요하다.

- 렌더링 전략은 라우터와 통합되어야 프레임워크로 빌드된 앱이 경로별로 렌더링 전략을 선택할 수 있다.
- 이를 통해 앱 전체를 다시 작성하지 않고도 다양한 렌더링 전략을 사용할 수 있다.

- 올바른 경로에 적합한 렌더링 전략을 사용하면
  - 콘텐츠의 첫 바이트를 호드하는 데 걸리는 시간(첫번째 바이트까지의 시간)
  - 콘텐츠의 첫 번째 부분을 렌더링하는 데 걸리는 시간(첫 번째 콘텐츠 페인트)
  - 앱에서 가장 큰 표시 콘텐츠를 렌더링하는 데 걸리는 시간(가장 큰 콘텐츠 페인트)을 줄일 수 있다.

- 기존 프로젝트에 인터랙티브 기능을 추가하고 싶다면, 리액트로 프로젝트를 다시 작성할 필요는 없다.

## 기존 프로젝트에 리액트 추가

- 많은 리액트 기반의 프레임워크는 풀스택이며, 리액트 앱이 서버를 호라용할 수 있도록 한다.
- 그러나 서버에서 자바스크립트를 실행할 수 없거나, 실행하고 싶지 않은 경우에도 동일한 접근방식을 사용할 수 있다.

[기존 페이지의 일부분에 리액트 사용하기]
- 이미 다른 기술(Rails와 같은 서버 기술 또는 Backbone과 같은 클라이언트 기술)로 빌드된 기존 페이지가 있고, 해당 페이지 일부에서 상호작용할 수 있는 리액트 컴포넌트를 렌더링하고 싶다고 가정한다.
- 이것은 리액트 컴포넌트를 통합하는 일반덕인 방식이다.
- 실제로 수년 동안 메타에서 리액트 사용을 이런 식으로 한다.

- 이 방식은 두 가지 단계로 수행할 수 있다.

  - JSX 구문을 사용할 수 있게 자바스크립트 환경을 설정하고, 
  import / export 구문을 통해 코드를 모듈로 분리한 다음, 
  npm 패키지 레지스트리에서 패키지(예시: React)를 사용한다.

  - 해당 페이지에서 원하는 위치에 React 컴포넌트를 렌더링한다.

[1단계: 모듈 자바스크립트 환경 설정]
- 모듈 자바스크립트 환경은 모든 코드를 한 파일에 작성하는 것이 아닌, 각각의 React 컴포넌트를 개별 파일로 작성할 수 있게 한다. 
- 또한 (React 자체를 포함한) 다른 개발자들이 npm 레지스트리에 배포한 훌륭한 패키지들을 모두 사용할 수 있다. 
- 이 작업을 수행하는 방법은 기존 설정에 따라 다르다.

- 애플리케이션이 자바스크립트 모듈을 컴파일하기 위한 기존 설정이 없다면, Vite를 이용하여 설정한다. 
  - Vite 커뮤니티는 Rails, Django, Laravel을 포함한 다양한 백엔드 프레임워크와의 통합을 지원하고 있음. 



## 2025-05-22

## 프로젝트에 도입하기(Installation)

- 리액트는 점진적으로 적용할 수 잇도록 설계되었으며, 필요한 만큼 사용할 수 있다.

## 리액트 시도하기

- React 문서의 대부분 페이지에는 이와 같은 샌드박스가 있다.
- React 문서 외에도 CodeSandbox, StackBlitz, CodePen 등의 온라인 샌드박스에서 React를 지원한다.

## 새로운 리액트 앱 만들기

- 앱에 기존 프레임워크에서 잘 제공되지 않는 제약 조건이 있거나, 자체 프래임워크를 빌드하는 것을 선호하거나, 리액트 앱의 기본 사항만 배우려는 경우 리액트 앱을 처음부터 빌드할 수 있다.
- 풀스택 프레임워크 : 최신 리액트 기능을 통합하고 리액트의 아키텍처를 활용
- 처음부터 시작하면 더 많은 유연성을 얻을 수 있지만 라우팅, 데이터 가져오기 및 기타 일반적인 사용 패턴에 사용할 도구를 선택해야 한다. 
- 이미 존재하는 프레임워크를 사용하는 대신 자신만의 프레임워크를 구축하는 것과 비슷하다.

## Next.js (앱 라우터)

- Next.js의 앱 라우터는 React의 아키텍처를 최대한 활용하여 풀 스택 React 앱을 활성화하는 React 프레임워크다.
- Next.js는 Vercel에서 유지 관리한다. 
- Next.js 앱을 빌드해서 Node.js와 서버리스 호스팅 혹은 자체 서버에 배포할 수 있다. 
- Next.js는 또한 서버가 필요없는 정적 내보내기도 지원한다. 
- Vercel은 추가적으로 옵트인 유료 클라우드 서비스도 지원한다.

## React Router (v7) 

- React Router는 React에서 가장 인기인는 라우팅 라이브러리이며 Vite와 함께 사용하면 풀스택 React 프레임워크를 만들 수 있다. 
- 표준 Web API를 강조하고 다양한 자바스크립트 런타임과 플랫폼을 위한 준비된 배포 템플릿이 있다.
- React Router는 Shopify에서 유지 관리한다.

## Expo (네이티브 앱용)

- Expo는 네이티브 UI를 사용하여 안드로이드, iOS, 웹을 위한 범용앱을 만들 수 있는 React 프레임워크이다. 
- 네이티브 부분을 쉽게 사용할 수 있게 해주는 React Native SDK를 제공한다.
- Expo는 Expo(the company)에서 유지 관리한다. 
- Expo로 앱을 빌드하는 것은 무료이고 구글이나 애플 스토어에 제한없이 제출할 수 있다. 
- Expo는 추가적으로 옵트인 유료 클라우드 서비스를 제공한다.

## 다른 프레임워크

- TanStack Start (Beta): TanStack Start는 TanStack Router를 기반으로 하는 풀스택 React 프레임워크이다. Nitro나 Vite와 같이 전체 문서 SSR, 스트리밍, 서버 함수, 번들링과 많은 유용한 도구를 제공한다.
- RedwoodJS: Redwood는 쉽게 풀스택 웹 애플리케이션을 만들 수 있도록 사전탑재된 패키지와 구성을 가진 풀스택 React 프레임워크이다.

## 1단계: 빌드 도구 설치

- 첫 번째 단계는 vite, parcel, rsbuild와 같은 빌드 도구를 설치하는 것이다.
- 빌드 도구는 다음과 같은 기능을 가지고 있다

  - 소스 코드를 패키징하고, 실행하는 기능
  - 로컬 개발을 위한 개발 서버
  - 앱을 프로덕션 서버에 배포하는 빌드 명령을 제공한다.

## Vite

- Vite는 현대 웹 프로젝트에 더 빠르고, 가벼운 개발 환경을 제공하는 것을 목표로 하는 빌드 도구이다.
- 빠른 새로고침, JSX, Babel/SWC 및 기타 일반적인 기능을 지원하는 풍부한 플러그인 생태게를 갖추고 있다.

## Parcel

- Parcel은 뛰어난 기본 개발 경험과 확장 가능한 아키텍처를 결합하여 프로젝트를 시작 단계에서 대규모 프로덕션 애플리케이션으로 발전시킬 수 있다.
- Parcel은 빠른 새로고침, JSX, Typescript, Flow 및 스타일링을 기본적으로 지원한다.

## RsBuild

- RsBuild는 리액트 애플리케이션 개발에 원활한 환경을 제공하는 Rspack 기반 빌드 도구이다.
- 세심하게 조정된 기본 설정과 성능 최적화 기능을 바로 사용할 수 있도록 제공
- RsBuild는 빠른 새로고침, JSX, Typescript 스타일링 등 리액트 기능을 기본적으로 지원한다.

## React Native용 Metro

- Metro는 iOS 및 Android와 같은 플랫폼에 대한 번들링을 지원하지만, 여기 소개된 도구에 비해 기능이 부족한 편이다.

## Routing

- 라우팅은 사용자가 특정 URL을 방문할 때 표시할 콘텐츠나 페이지를 결정한다.
- 앱의 여러 부분에 URL을 매핑하려면 라우터를 설정해야 한다.
- 또한 중첩된 경로, 경로 매개변수, 쿼리 매개변수도 처리해야 한다.
- 라우터는 코드 내에서 구성하거나 구성 요소 폴더 및 파일 구조에 따라 정의할 수 있다.
- 라우터는 최신 애플리케이션의 핵심 부분이며, 일반적으로

  - 데이터 패치 : 더 빠른 로딩을 위해 전체 페이지에 대한 데이터를 미리 패치하는 것 포함
  - 코드 분할 : 클라이언트 번들 크기를 최소화하기 위한 것
  - 페이지 렌더링 방식 : 각 페이지가 생성되는 방식을 결정하기 위한 것

## Data Fetching(데이터 미리 가져오기)

- 서버나 다른 데이터 소스에서 데이터를 미리 가져오는 것으로 대부분의 애플리케이션에서 핵심적인 부분이다.
- 이를 제대로 수행하려면 로딩 상태, 오류 상태, 그리고 가져온 데이터를 캐싱 등 복잡한 기능이 포함된다.

## 처음부터 리액트 앱 만들기

- 특별히 제작된 데이터 가져오기 라이브러리는 데이터를 가져오고 캐싱하는 어려운 작업을 대신 처리해 주므로, 개발자는 앱에 필요한 데이터와 이를 표시하는 방법에 집중할 수 있다.
- 이러한 라이브러리는 일반적으로 컴포넌트에서 직접 사용되지만, 더 빠른 프레패칭과 더 나은 성능을 위해 라우팅 로더에 통합되거나 서버 렌더링에도 사용할 수 있다.
- 컴포넌트에서 직접 데이터를 가져오면 네트워크 요청 폭주로 인해 로딩 시간이 느려질 수 있으므로, 라우터 로더나 서버에서 데이터를 미리 가져오는 것이 좋다.

  - 이렇게 하면 페이지가 표시될 때 페이지의 모든 데이터를 한 번에 가져올 수 있다.
- 대부분의 백엔드나 REST 스타일 API에서 데이터를 가져오는 경우 다음을 사용하는 것이 좋다.

  - React Query
  - SWR
  - RTK Query

## 코드 분할(Code-splitting)

- 코드 분할은 앱을 필요에 따라 호드할 수 있는 작은 묶음으로 나누는 프로세스이다.
- 앱의 코드 크기는 새로운 기능과 추가 종속성이 있을 때마다 증가한다.
- 앱 전체의 코드를 전송해서 사용하기 때문에 앱 로드 속도가 느려질 수 있다.
- 캐싱, 기능/종속성 축소, 일부 코드를 서버에서 실행되도록 이동하면 로드 속도 저하를 완화하는데 도움이 되지만, 과도하게 사용하면 기능이 저하될 수 있는 불완전한 해결책이다.
- 프레임워크를 사용하는 앱에 의존하여 코드를 분할하는 경우, 코드 분할이 전혀 발생하지 않았을 때보다 로딩 속도가 느려지는 상황이 발생할 수 있다.

## 애플리케이션 성능 개선

- 선택한 빌드 도구는 단일 페이지 앱(SPA)만 지원하므로

  - 서버 사이드 렌더링(SSR) : SSG와 유사하지만 매 요청 시 서버에서 정적 페이지 생성
  - 정적 사이트 생성(SSG) : 빌드 시 한 번에 모든 정적 페이지 생성
  - React 서버 컴포넌트(RSC) : 서버에서 동작하는 컴포넌트로 DB 접근 등이 가능
와 같은 다른 렌더링 패턴을 구현해야 한다.
1. 단일 페이지 앱(SPA)은 단일 HTML 페이지를 로드하고, 사용자가 앱과 상호작용할 때 페이지를 동적으로 업데이트 한다.
  
  - SPA는 시작하기는 쉽지만 초기 로드 시간이 느릴 수 있다.
  - SPA는 대부분의 빌드 도구에서 기본 아키텍처로 사용된다. 



## 2025-05-15

## State가 어디에 있어야 할 지 정하기

 - React는 항상 컴포넌트 계층구조를 따라 부모에서 자식으로 데이터를 전달하는 단방향 데이터 흐름을 사용한다.
 - 공통 부모에 state를 그냥 둔다
 - 공통 부모 상위의 컴포넌트에 둔다
 - state를 소유할 적절한 컴포넌트를 찾지 못하였다면, state를 소유하는 컴포넌트를 하나 만들어서 상위 계층에 추가한다.
 - useState() Hook을 이용해서 state를 컴포넌트에 추가한다.
 - 여기서 Hooks는 React 기능에 “연결할 수(hook into)” 있게 해주는 특별한 함수이다.

## 2025-05-08

## React로 사고하기

- 리액트로 사용자 인터페이스를 빌드할 때, 이를 컴포넌트라는 조각으로 나눔
- 각 컴포넌트의 다양한 시각적 상태들을 정의
- 마지막으로 컴포넌트를 연결하여 데이터가 그 사이를 흘러가게 연결함

## JSON API

- JSON API는 아래와 같은 형태의 데이터를 반환

    ![](/react-test-app/image/rp16.png)

## UI를 컴포넌트 계층으로 쪼개기

- 어떤 배경을 가지고 있는지에 따라 디자인을 컴포넌트로 나누는 방법에 대한 관점이 달라짐
  - Programming : 새로운 함수나 객체를 만드는 방식과 같은 방법으로 접근
  - CSS : 클래스 선택자를 무엇으로 만들지 생각
  - Design : 디자인 계층을 어떤 식으로 구성할 지 생각
- JSON이 잘 구조화 되어 있을 경우, 종종 UI의 컴포넌트 구조가 자연스럽게 데이터 모델에 대응됨

- 다섯개의 컴포넌트

  ![](/react-test-app/image/rp17.png)

  1. FilterableProductTable(회색): 예시 전체를 포괄합니다.
  2. SearchBar(파란색): 사용자의 입력을 받습니다.
  3. ProductTable(라벤더색): 데이터 리스트를 보여주고, 사용자의 입력을 기반으로 필터링합니다.
  4. ProductCategoryRow(초록색): 각 카테고리의 헤더를 보여줍니다.
  5. ProductRow(노란색): 각각의 제품에 해당하는 행을 보여줍니다.

- 독립된 컴포넌트를 따로 생성할 지 생성하지 않을지 여부는 개발자의 선택이다.

## 리액트로 정적인 버전 구현하기

- 가장 쉬운 방법은 상호작용 기능을 아직 추가하지 않고, 데이터 모델로부터 UI를 렌더링 하는 버전을 제작하는 것이다.
- 정적인 버전을 먼저 만들고 이후 상호작용 기능을 추가하는 것이 더 수월하다.
- 정적 버전은 많은 타이핑이 필요하나 생각할 것이 적다.
- 상호작용 기능은 많은 생각을 필요로 하나, 타이핑은 그리 많이 필요하지 않다.
- 데이터 모델을 렌더링하는 앱의 정적인 버전을 만들기 위해 다른 컴포넌트를 재사용하고 props를 이용하여 데이터를 넘겨주는 컴포넌트를 구현해야 한다.

- 정적인 버전 제작 시에는 state를 사용하지 말 것!
- state는 상호작용을 위해, 즉 시간이 지남에 따라 데이터가 바뀌는 것에 사용됨
- 앱 제작 시 컴포넌트부터 시작하는 하향식(top-down)으로 만들거나 또는 하층부에 잇는 컴포넌트부터 상향식(bottom-up)으로 제작할 수 있음

- 이 단계가 끝나면 데이터 렌더링을 위해 만들어진 재사용 가능한 컴포넌트들의 라이브러리를 가지게 된다.
- 계층구조의 최상단 컴포넌트는 prop으로 데이터 모델을 받음.
- 이는 데이터가 최상단 컴포넌트부터 트리의 맨 아래까지 흘러가기 때문에 "단방향 데이터 흐름" 이라고 함.

## 최소한의 데이터만 이용해서 완벽하게 UI Store 표현하기

- UI를 상호작용하게 만들려면, 사용자가 기반 데이터 모델을 변경할 수 있게 해야한다.
- 리액트는 state를 통해 기반 데이터 모델을 변경할 수 있게 한다.
- state를 구조화 하는데 가장 중요한 원칙은 중복배제원칙(Don't Repeat YourSelf)이다.
- UI에 상품 아이템의 개수를 노출하고 싶다면, 상품 아이템 개수를 따로 state 값으로 가지는게 아닌 단순하게 배열의 길이만 쓰면 된다.

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
  
## map함수의 사용

- map의 기본 구문은 map(callbackFn)혹은 map(callbackFn, thisArg) 이다.

  ```javascript
  const moves = history.map((squares, move) => { })
  ```

- thisArg는 내부에서 this로 사용할 값을 지정하는데 화살표 함수에서는 생략된다.
- history.map: history는 모든 플레이를 저장하는 배열입니다. 이 history에 map함수를 적용한다는 의미이다.
- map함수는 history 각각의 요소 index를 순회하면서 squares를 추출한다.
- 각 요소는 { } 안의 실행문을 싱핼하면서 버튼을 생성
- 이렇게 생성된 버튼은 moves 객체에 다시 저장
- move는 최종 렌더링에 사용됨

### 정리하면

- 원본 배열(history) : map이 호출된 원본 배열
- 원본 배열의 인덱스(move) : 현재 순환 중인 원본 배열 요소의 인덱스
- 요소 값(squares) : 현재 순회 중인 요소 배열의 값
- 각각의 history 요소에 대한 { }의 실행문(후작업)실행
- moves 객체에 저장
- 최종 출력에 사용

## Key 선택하기

- 리스트의 항목은 추가, 제거, 재정렬 또는 업데이트될 수 있다.
- 리액트는 컴퓨터 프로그램이므로 업데이트한 리스트의 의도가 무엇인지 알지 못한다.
- 리스트의 항목에 key 프로퍼티를 지정하여 각 리스트의 항목이 다른 항목과 다르다는 것을 구별해 줘야 한다.
- key는 각 리액트가 각 컴포넌트를 구별할 수 있도록 하여, 컴포넌트가 다시 렌더링 될 때 리액트가 해당 컴포넌트의 state를 유지할 수 있게 한다.
- key는 리액트에서 특별하게 미리 지정된 프로퍼티이다.
- 속성이 생성되면 리액트는 key 프로퍼티를 추출하여 반환되는 속성에 직접 key를 저장한다.
- React는 자동으로 key를 사용해 업데이트할 컴포넌트를 결정한다.
- 부모가 지정한 key가 무엇인지 컴포넌트는 알 수 없다.
- key가 지정되지 않은 경우, React는 경고를 표시하며 배열의 인덱스를 기본 key로 사용한다.
- 배열 인덱스를 key로 사용하면 리스트 항목의 순서를 바꾸거나 항목을 추가/제거할 때 문제가 발생한다.
- key는 전역적으로 고유할 필요는 없으며 컴포넌트와 해당 컴포넌트의 형제 컴포넌트 사이에서만 고유하면 된다.

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

## React Project의 구조 및 역할

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
