# Private Project 04 - React-GenshinAPI

## 👥 Member Info

### 이유승

## 💪🏻프로젝트의 목표와 진행 방법

게임 ‘원신’을 주제로 외부 API 호출, 무한 스크롤 기능이 포함된 모바일 앱 구현

## 👍프로젝트 소개 페이지

- `Notion` [🔗Link](https://www.notion.so/Lee-Yuseung-6f40078f4a3340a1955b62cf823e4b9a?pvs=4#6a55d849d3a14f9e80c599e3e9657435)

### ✔️ 배포

- `Google Firebase` [🔗Link](https://prj4deploy.web.app/)

## 🛫 시작 가이드

- 실행 방법 (2가지 중 택 1)
  > 1. 배포 링크를 통한 접속
  > 2. ZIP 파일 다운로드 및 압축 풀기 후 코드 에디터로 실행

```
$ npm i
$ npm run start
```

## 🛠️ 사용한 기술 스택

#### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Git hub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![Source Tree](https://img.shields.io/badge/SOURCE%20TREE-blue?style=for-the-badge&logo=sourcetree)

#### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

#### Development

![HTML5](https://img.shields.io/badge/HTML-%23F5AF64?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS-%230A82FF?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router Dom](https://img.shields.io/badge/react%20router-CA4245?style=for-the-badge&logo=react-router&logoColor=white%27)
![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black)

### 주요 기능,

- 게임 ‘원신’을 주제로 하는 웹 페이지 / 앱.
- 외부 API를 호출하여 데이터를 받아 가공하여 화면에 적절히 출력하는 기능.
- 모바일 대응 능력.

### 담당 역할,

- 프로젝트 기획, DB 테이블 설계.
- 프로젝트 전체 기능 구현.
- Sourcetree를 이용한 프로젝트 Git 관리.

### 성과,

- 웹 API에서 데이터를 받아 내부적으로 가공하여 사용하는 기능 구현.
- onScroll 이벤트를 사용하는 무한 스크롤 기능 구현.
- 반응형 웹을 이용한 PC / 모바일 대응 방법.

### 개선할 점,

- 무한 스크롤 기능이 시스템에 부하를 가함.
- 다양한 모바일 환경에 대응하기 위해서 더 효율적인 반응형 웹 구현 방법을 공부해야 함.

## 🌲프로젝트 구조

```bash
src
 ┣ assets
 ┣ components
 ┃ ┣ Appbar.js
 ┃ ┣ CharactersInfo.js
 ┃ ┣ Contents.js
 ┃ ┣ ContentsImg.js
 ┃ ┣ Contentsbox.js
 ┃ ┣ WeaponsInfo.js
 ┣ pages
 ┃ ┣ Introduce.js
 ┃ ┣ Loading.js
 ┃ ┣ Mainpage.js
 ┣ style
 ┃ ┗ Appbar.css
 ┃ ┗ CharactersInfo.css
 ┃ ┗ Contents.css
 ┃ ┗ ContentsImg.css
 ┃ ┗ Contentsbox.css
 ┃ ┗ Loading.css
 ┃ ┗ PublicCSS.css
 ┃ ┗ WeaponsInfo.css
 ┃ ┗ introduce.css
 ┣ App.css
 ┣ App.js
 ┣ App.test.js
 ┣ index.css
 ┣ index.js
 ┣ reportWebVitals.js
 ┗ setupTests.js
```
