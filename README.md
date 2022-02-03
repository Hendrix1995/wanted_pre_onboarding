# wanted_pre_onboarding

구현 내용

<ul>
    <li>Toggle</li>
    <li>Modal</li>
    <li>Tab</li>
    <li>AutoComplete</li>
    <li>ClickToEdit</li>
</ul>

<br />

## Toggle

### 🔨 구현한 방법과 이유에 대한 간략한 내용

<ul>
    <li>토글 스위치 on, off를 state로 사용합니다.</li>
    <li>on, off에 따라 삼항연산자로 스타일을 변경하였습니다.</li>
</ul>

### 📝 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

<ul>
    <li>토글스위치를 변경 했을때, 내부의 색갈이 함께 올라가는 디자인</br />=> background-color과 transform을 사용해 타이밍이 맞도록 스타일로 한번에 처리하려고 했지만 실패하였고, 간단하게 div 태그를 만들어 position: absolute와 transform: translateX로 처리하였습니다.</li>
</ul>

### 🧑‍💻 자세한 실행 방법

<ul>
    <li>버튼의 어떤 공간을 눌러도 스위치가 변경됩니다.</li>
    <li>버튼의 상태에 따라 아래에 설명이 변경됩니다.</li>
</ul>

<br />

## Modal

### 🔨 구현한 방법과 이유에 대한 간략한 내용

<ul>
    <li>모달 오픈 스위치 on, off를 state로 사용하였습니다.</li>
    <li>on, off에 따라 삼항연산자로 컴포넌트가 렌더되거나 null로 바뀌어 사라집니다.</li>
</ul>

### 📝 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

<ul>
    <li>다른 프로젝트와 잦은 사용으로 어려웠던 점은 없었습니다. UX를 위해 X버튼을 좌, 우 상단으로 바꾸는 것이 좋을것 같지만, 예시와 달라질까봐 그대로 두었습니다. 만약, 바꾼다면 display:flex 와 justify-content: flex-start, flex-end로 정렬 시킬 수 있습니다.</li>
</ul>

### 🧑‍💻 자세한 실행 방법

<ul>
    <li>버튼을 누르면 모달이 열립니다.</li>
    <li>X버튼이나 혹은, backdrop인 모달창 외부의 회색부분을 누르면 모달이 닫칩니다.</li>
</ul>

<br />

## Tab

### 🔨 구현한 방법과 이유에 대한 간략한 내용

<ul>
    <li>Tab의 요소들을 배열에 담아 map으로 렌딩시켰습니다.</li>
    <li>아래의 설명이 바뀌는 것을 index로 처리하였습니다.</li>
</ul>

### 📝 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

<ul>
    <li>map 함수를 사용하면 index를 이용해 요소들을 처리할 수 있다는 것을 알고 있었기 때문에 어려운 점은 없었습니다.</li>
</ul>

### 🧑‍💻 자세한 실행 방법

<ul>
    <li>각 Tab을 누르면 눌린 Tab의 색이 변경됩니다.</li>
    <li>눌린 Tab에 따라 아래의 설명에 어떤 탭이 활성화 되어 있는지 표시됩니다.</li>
</ul>

<br />

## Tag

### 🔨 구현한 방법과 이유에 대한 간략한 내용

<ul>
    <li>각 Tag들이 input 옆에 차례대로 나올 수 있게 큰 컨테이너로 감싼후, input의 border를 없에 주었습니다.</li>
    <li>input이 focus 되었을때, 큰 컨테이너의 border를 더 진하게 만들어 주고, focus가 해제되면 다시 스타일을 바꾸어 주었습니다.</li>
    <li>태그들이 입력되고 onKeyUp으로 Enter키를 입력하면 입력된 태그가 전체 태그들이 들어있는 배열에 추가 됩니다.</li>
    <li>태그 삭제 버튼을 누르면, 태그의 index를 받아와 filter로 원본 태그 배열에 알맞은 index를 제외하고 다시 렌딩시킵니다.</li>
</ul>

### 📝 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

<ul>
    <li>태그들이 많이 늘어나거나, 너무 긴 태그가 있을경우 input의 크기 조절</br>
    => 큰 컨테이너의 width를 Fit-contents로 맞춰주고, flex-wrap으로 길이가 초과 될 경우에 태그들이 줄 바꿈이 되도록 구현하였습니다.
    </li>
    <li>input이 focus되었을때, 가장 외각의 border가 색이 변경됨</br>
    => state로 focus상태를 만들어 주고 onFocus로 focus되었을 때와 onBlur로 focus가 풀렸을때 focus상태를 변경시켜서 스타일을 바꾸어 적용시켜 주었습니다.
    </li>
</ul>

### 🧑‍💻 자세한 실행 방법

<ul>
    <li>input창에 text를 입력 한 후 'Enter'키를 누르면 태그가 추가됩니다.</li>
    <li>input창에 입력된 text가 없을 경우 태그가 추가되지 않습니다.</li>
    <li>추가된 태그의 오른쪽에 'X' 버튼을 누르면 입력된 태그가 제거됩니다.</li>
</ul>

<br />

## AutoComplete

### 🔨 구현한 방법과 이유에 대한 간략한 내용

<ul>
    <li>input에 입력된 값이 있는지를 확인해, dropdown 창을 보여줍니다.</li>
    <li>입력된 값을 state로 받아 input의 값이 수정될 때마다 바꾸어 주고, 입력된 값에 포함된 글자가 추천 목록에 있다면 dropdown에 보여줍니다.</li>
    <li>추천 목록은 filter를 이용해 입력된 값에 따라 걸러집니다.</li>
    <li>dropdown의 요소를 누르면 input의 값을 변경시킵니다.</li>
</ul>

### 📝 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

<ul>
    <li>입력된 값에 따라 추천 목록을 변경시켜야 함</br>
    => input에 입력된 값이 있다면, 그것과 맞는 값을 RegExp로 찾아 filter와 match를 사용해 추천 될 수 있는 단어들을 찾아 다시 추천 목록에 넣어 주었습니다. 
    </li>
    <li>추천 목록의 단어의 갯수에 따른 dropdown의 스타일 변경</br>
    => 큰 컨테이너로 묶어서 dropdown도 포함시켜서 요소의 갯수에 따라 border가 늘어나게 구현하였습니다. dropdown의 최상단의 얇은 border를 주어서 dropdown이 렌더 되었을때 칸을 나눠 주었습니다.
    </li>
    <li>input의 값을 버튼으로 지우면 다음 입력에 추천 목록이 나오지 않던 문제</br>
    => input의 값만을 초기화 시키고 추적되던 state의 값을 초기화 시켜 주지 않아서 중복으로 입력된 값들이 추적되는 현상이었습니다. X 버튼을 눌렀을때 추적되는 값과 input의 값도 초기화 시켜서 해결하였습니다.
    </li>
</ul>

### 🧑‍💻 자세한 실행 방법

<ul>
    <li>input창에 text를 입력하면 추천 목록을 dropdown으로 보여줍니다.</li>
    <li>우측의 'X' 버튼을 누르면 input의 값이 지워집니다.</li>
</ul>

<br />

## ClickToEdit

### 🔨 구현한 방법과 이유에 대한 간략한 내용

<ul>
    <li>입력되는 input의 값을 state에 저장해, 아래의 text를 input의 값이 onBlur로 바뀔 때 마다 변경시켜 줍니다.</li>
</ul>

### 📝 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

<ul>
    <li>초기값이 존제하고, onBlur를 알고 있었기 때문에 어려웠던 점은 없었습니다. 나이칸에는 숫자만 입력되도록 input type을 줘 완성도를 올리기 위해 노력하였습니다.
    </li>
</ul>

### 🧑‍💻 자세한 실행 방법

<ul>
    <li>이름과 나이를 입력한 후에 focus를 풀면 아래의 text 값이 입력된 값으로 변경됩니다.</li>
    <li>나이칸에는 숫자만 입력이 가능합니다.</li>
</ul>
