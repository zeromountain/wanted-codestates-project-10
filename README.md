## 🗣 소개

국내 임상시험 추천 검색 서비스

[🚀 배포](https://zeromountain-humanscape.netlify.app/)

## 🕹 실행 방법

```
① 해당 레포지토리를 클론한다.
② 프로젝트의 패키지를 설치한다. (npm install)
③ scripts 명령어로 프로젝트를 실행한다. (npm start)
```

## 🛠️ 기술 스택

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🤔 회고

### API 호출 최적화

**로컬 캐싱**

- 내부적으로 로컬 캐싱을 지원하는 redux-toolkit의 RTK query를 사용해 검색 API 호출 ([캐시 동작](https://zeromountain.netlify.app/redux/rtk-query---cache-behavior/))

**전략적 API 호출**

- 타이머 호출 스케줄링을 이용해 디바운스 구현
  - `onChange` 이벤트를 그룹화하여 500ms 후, 한 번만 API 호출하도록 설정

```js
// API 호출
const {
  data = [],
  isLoading,
  isFetching,
} = useGetSearchQuery(debounceValue, {skip: !debounceValue});
/*
{skip: !debounceValue}: debounceValue의 값이 null이면 API 호출하지 않는 옵션
*/
```

```js
// onChange event handler
const handleChangeWord = e => {
  dispatch(changeWord({word: e.target.value}));
  if (timer) clearTimeout(timer);
  const newTimer = setTimeout(() => {
    const value = e.target.value;
    setDebounceValue(value);
  }, 500);
  setTimer(newTimer);
};
```

### 추천검색어 이동

- `onKeyDown` 이벤트로 ↑, ↓ 방향키 입력 감지해 선택 영역이 바뀌도록 구현

```js
// onKeyDown event handler
const handleKeyMove = (e, type) => {
  if (e.keyCode === 40) {
    // 아래 방향키
    if (type === 'main' && moveIdx < 6) {
      setMoveIdx(moveIdx + 1);
    }
    if (type === 'sub' && moveIdx < data.length) {
      setMoveIdx(moveIdx + 1);
    }
  } else if (e.keyCode === 38) {
    // 위 방향키
    if (moveIdx > 0) {
      setMoveIdx(moveIdx - 1);
    }
  }
};
```

```js
// change selected
useEffect(() => {
  if (data.length != 0 && moveIdx != -1 && moveIdx < data.length) {
    setSelected(data[moveIdx].id);
  }
}, [moveIdx]);
```

### 어려웠던 점

- 캐시 최적화에 대한 이해가 부족했기 때문에, 로컬 캐싱을 구현하기 위한 방법을 찾는데 많은 시간이 소요되었지만 `RTK Query`를 사용해 해결할 수 있었습니다.
  - expire time은 `RTK Query`의 기본값인 60초를 사용하였는데, 캐시의 생명 주기를 더 짧게 가져가는게 좋을지 고민이 되었습니다.
- 1040px 미만인 경우, 추천 검색어 전체 리스트에서 방향키로 이동하다가 뷰포트 마지막 지점에 도달했을 때, 스크롤도 함께 내려가도록 구현하고 싶었습니다. `getBoundingClientRect()` 메서드를 사용해 구현하려고 했지만, 컴포넌트 설계가 잘못되어서 어떻게 해결해야할지 고민 중입니다.
