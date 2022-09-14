# 노동요

### 단체프로젝트 (https://www.youtube.com/watch?v=KIWhaG2H5PI)
### 백엔드(2명) + 프론트엔드(2명)

<img width="1191" alt="메인" src="https://user-images.githubusercontent.com/47154709/190161226-0342bde0-8350-4890-b391-85e8ac07db75.png">

### 💁🏻 1. 어플리케이션 소개
#### 일(노동)을 하면서 들을 노래를 업로드/추천하는 어플리케이션

### 👑 2. 담당역할
#### 프론트엔드 개발
### 담당 완료내용
+ 페이지 레이아웃 개발
+ react-player를 활용한 플레이어 개발 ( https://youtu.be/FxIN8TOpEGk )
  + react-player 커스터마이징
    + get-youtube-id이란 npm을 활용, 유튜브 영상을 받아서 해당 영상 링크, 플레이어에서 실행할 수 있도록 조치
    + @ramonak/react-progress-bar 을 활용, react-player 재생에 프로그래스바를 적용, 재생실행할 수 있도록 설정
+ 로그인
  + firebase를 활용해 로그인 구현

### 🌞 3. 프로젝트 일정
+ 작업기간 : 02/12,2022 ~ 03/01,2022 (1M)

### 🔨 4. 사용기술
+ view
  + React-Typescript(17.0.39)
  + styled-components(Typescript)
+ axios
+ firebase

### ⚙️ 5. 주요기능
+ react-player로 영상실행
+ firebase를 통해 로그인

### 🔦 6. 애플리케이션 구조
![PNG  노동요 폴더구조](https://user-images.githubusercontent.com/47154709/190170190-f50b3ff4-8c08-41c9-9434-988778eae5d7.png)

폴더명 | 폴더내용
------|------|
@types | clipboard, faker, import-img, json-server의 type 파일을 저장
core | props의 interface 파일들을 저장
server | axios, firebase, auth관련 작업
store | clipboard 모듈과 같은 프로젝트에서 사용하는 모듈을 저장
view | 프로젝트의 view 파일, 프로젝트에서 사용하는 커스텀 모듈을 저장





