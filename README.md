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

## 요구사항
다음 사항들을 충족하는 검색어 추천 기능을 구현해주세요.

- 다음 URL로 접속하여 일부분(검색 영역)을 클론 코딩해주세요. (옵션 사항)
    - [https://clinicaltrialskorea.com/](https://clinicaltrialskorea.com/)
    
    <img src="https://i.ibb.co/z7NBtRF/1.png">
    
- 질환명 검색시 추천 하는 부분을 만듭니다.
    
    <img src="https://i.ibb.co/GxhDTns/2.png">
    
    - 검색어 추천 API는 다음을 사용합니다. (경우에 따라 로컬에서 mockup으로 사용하셔도 됩니다.)
    - [https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name={검색어](https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name={검색어)}
        - 예제) 검색어에 ‘암’을 넣었을경우
        
        ```json
        [{"name":"Klatskin's tumor","id":125},
        {"name":"간세포암","id":133},
        {"name":"갑상선암종","id":187},
        {"name":"고환암","id":335},
        {"name":"뼈암","id":375},
        {"name":"구강암","id":445},
        {"name":"치은암","id":449},
        {"name":"기저세포상피종","id":642},
        {"name":"상피성악성종양","id":648},
        {"name":"뇌암","id":812},
        {"name":"담관암종","id":893},
        {"name":"결장암","id":975},
        {"name":"대장악성종양","id":976},
        {"name":"대장의 악성신생물","id":978},
        {"name":"구강암","id":1065},
        {"name":"부비동암","id":1066},
        {"name":"혀암","id":1070},{"name":"대뇌위축성과암모니아혈증","id":1152},{"name":"유전성 대장암","id":1191},{"name":"림프종","id":1200},{"name":"Malignant neoplasm of bladder","id":1551},{"name":"부갑상선암","id":1683},{"name":"편평상피세포암","id":1773},{"name":"폐선암","id":1774},{"name":"인두암","id":1782},{"name":"작은 창자암","id":2071},{"name":"신세포암","id":2277},{"name":"신장암","id":2278},{"name":"심장암","id":2375},{"name":"안구암","id":2484},{"name":"cancer of the stomach","id":2847},{"name":"Breast tumor","id":2898},{"name":"자궁 상피 내 암종","id":3078},{"name":"Malignant neoplasm of endometrium","id":3103},{"name":"척추 종양","id":3459},{"name":"척추 신생물","id":3461},{"name":"췌장 신경내분비암","id":3517},{"name":"췌장암종","id":3522},{"name":"췌장의악성신생물","id":3523},{"name":"액취증","id":3530},{"name":"Salivary adenocarcinoma","id":3644},{"name":"폐악성종양","id":3865},{"name":"항문관암","id":3975},{"name":"간문부 담관암","id":120},{"name":"상부 담관암","id":123},{"name":"liver cancer","id":132},{"name":"갑상선 수질암","id":171},{"name":"갑상샘여포암","id":174},{"name":"갑상선 유두암","id":175},{"name":"갑상샘암","id":186},{"name":"협부암","id":450},{"name":"난소 악성 종양","id":695},{"name":"담낭암","id":901},{"name":"쓸개암","id":905},{"name":"대장암종","id":977},{"name":"cerroatrophic hyperammonemia","id":1151},{"name":"린치 증후군","id":1188},{"name":"림프암","id":1201},{"name":"임파선암","id":1203},{"name":"십이지장 유두암","id":1473},{"name":"방광 내 신생물","id":1552},{"name":"부신암","id":1713},{"name":"비강종물","id":1766},{"name":"기관지 폐포암","id":1769},{"name":"소장암","id":2069},{"name":"식도암","id":2197},{"name":"눈암","id":2483},{"name":"눈의 악성 종양","id":2485},{"name":"Gastric cancer","id":2845},{"name":"위 악성종양","id":2848},{"name":"유방 악성신생물","id":2899},{"name":"융모막암종","id":2937},{"name":"융모막 암","id":2938},{"name":"자궁내막암","id":3102},{"name":"전립선암","id":3230},{"name":"암 전이","id":3248},{"name":"전이성 암","id":3249},{"name":"직장암종","id":3415},{"name":"충수돌기암","id":3511},{"name":"췌장 신경내분비종양","id":3519},{"name":"췌장악성종양","id":3521},{"name":"취한증","id":3527},{"name":"Salivary Gland Tumor","id":3643},{"name":"편도암","id":3805},{"name":"폐암","id":3862},{"name":"기관지암","id":3863},{"name":"폐암종","id":3866},{"name":"피부암","id":3917},{"name":"성문암","id":4152},{"name":"간세포성 암종","id":131},{"name":"갑상샘미분화암","id":170},{"name":"갑상샘수질암","id":172},{"name":"골암","id":373},{"name":"기저세포암","id":643},{"name":"모모조직암","id":646},{"name":"바닥세포 암종","id":647},{"name":"Malignant neoplasm of ovary","id":694},{"name":"뇌종양","id":811},{"name":"담도암","id":894},{"name":"후두암","id":1068},{"name":"인후두암","id":1069},{"name":"레트 증후군 ","id":1150},{"name":"비용종성 직장암","id":1190},{"name":"바터 팽대부 암","id":1472},{"name":"방광선암","id":1553},{"name":"복막 위 점액종","id":1645},{"name":"전이성 점액성 선암종","id":1646},{"name":"대세포암","id":1770},{"name":"비소세포 폐암","id":1771},{"name":"비소세포암","id":1772},{"name":"비인두 종양","id":1780},{"name":"작은 창자의 악성 종양","id":2070},{"name":"신우요관암","id":2281},{"name":"신우뇨관암","id":2282},{"name":"악성 종격동 종양","id":2432},{"name":"종격동 악성종양","id":2433},{"name":"원발부위 불명암","id":2779},{"name":"미상암","id":2780},{"name":"위암","id":2844},{"name":"Malignant neoplasm of stomach","id":2846},{"name":"위선암종","id":2850},{"name":"유방 상피내암","id":2889},{"name":"유방종","id":2900},{"name":"융모상피암","id":2939},{"name":"자궁경부 상피내종양","id":3080},{"name":"전립선 암종","id":3232},{"name":"직장악성종양","id":3414},{"name":"췌장암","id":3515},{"name":"이자암","id":3516},{"name":"타액선암","id":3642},{"name":"악하선암","id":3647},{"name":"이하선암","id":3648},{"name":"피부암종","id":3918},{"name":"피부의 악성종양","id":3919},{"name":"성문하부암","id":4153},{"name":"흉선암","id":4169},{"name":"근위부 담관암","id":122},{"name":"간세포암종","id":134},{"name":"간암","id":135},{"name":"갑상선암","id":185},{"name":"고환 종양","id":334},{"name":"골육종","id":372},{"name":"구강저암","id":447},{"name":"설암","id":448},{"name":"모모세포종","id":645},{"name":"난소암","id":693},{"name":"담관악성종양","id":892},{"name":"담낭악성종양","id":903},{"name":"쓸개악성종양","id":904},{"name":"비용종성 대장암","id":1189},{"name":"유전성 직장암","id":1193},{"name":"비강암","id":1764},{"name":"신세포암종","id":2275},{"name":"renal cancer","id":2276},{"name":"심장 종양","id":2373},{"name":"심장 암종","id":2374},{"name":"종격동 암","id":2434},{"name":"외음부암","id":2708},{"name":"원발불명암","id":2782},{"name":"음경암","id":2947},{"name":"Cervical intraepithelial neoplasia","id":3079},{"name":"자궁체부암","id":3104},{"name":"전이 암","id":3247},{"name":"췌장 전이암","id":3512},{"name":"전이성 췌장암","id":3514},{"name":"암내","id":3529},{"name":"소타액선암","id":3646},{"name":"항문암","id":3974},{"name":"항문악성종양","id":3976},{"name":"항문의 악성신생물","id":3977},{"name":"흉선암종","id":4171},{"name":"간문부암","id":121},{"name":"클라츠킨 종양","id":124},{"name":"갑상선 미분화암","id":169},{"name":"갑상선 여포암","id":173},{"name":"골원성육종","id":374},{"name":"oral cavity cancer","id":446},{"name":"기저세포 암종","id":641},{"name":"기저세포종","id":644},{"name":"뇌종양","id":813},{"name":"담관암","id":891},{"name":"담낭 선암종","id":902},{"name":"대장암","id":974},{"name":"두경부암","id":1064},{"name":"인두암","id":1067},{"name":"유전성 비용종성 대장 직장암","id":1192},{"name":"악성림프종","id":1202},{"name":"방광암","id":1550},{"name":"복막 가성점액종","id":1644},{"name":"부신악성종양","id":1714},{"name":"비부비동 종양","id":1763},{"name":"부비동암","id":1765},{"name":"비소세포성 폐암","id":1768},{"name":"비인두암","id":1781},{"name":"식도암종","id":2198},{"name":"안암","id":2482},{"name":"불명암","id":2781},{"name":"위선암","id":2849},{"name":"위암종","id":2851},{"name":"유방암","id":2896},{"name":"Breast Cancer","id":2897},{"name":"Malignant neoplasm of prostate","id":3231},{"name":"직장암","id":3413},{"name":"질암","id":3431},{"name":"척추암","id":3460},{"name":"충수암","id":3509},{"name":"맹장암","id":3510},{"name":"전이성 췌장 종양","id":3513},{"name":"췌장 신경내분비종","id":3518},{"name":"췌장선암","id":3520},{"name":"겨드랑이 다한증","id":3528},{"name":"설하선암","id":3645},{"name":"침샘암","id":3649},{"name":"폐 악성신생물","id":3864},{"name":"후두암","id":4150},{"name":"성문상부암","id":4151},{"name":"가슴샘종","id":4170},{"name":"흉선종","id":4172}]
        ```
        
- 검색어가 없을 시에는 “검색어 없음”이 나와야 합니다.

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
