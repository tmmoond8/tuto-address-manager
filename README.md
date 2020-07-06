# tumblbugs recruit task

> 배송 주소 관리 서비스 구현

## Project Stack

Frontend
Following items are core frontend technologies used in this project:

- React
- Emotion
- TypeScript
- Storybook

Backend
Following items are core backend technologies used in this project:

- Node.js
- TypeScript
- Express
- Firebase Database

## Run

Backend

```bash
$ cd backend && yarn && yarn start

```

Frontend

````
$ cd frontend && yarn && yarn start
$ cd frontend && yarn storybook
```


## 구현되지 않은 리스트

- 모바일 UI만 구현
- 배송지 추가 시 다이얼로그 닫히고 리스트가 갱신 되지 않음

## 버그 리스트

- 기본 배송지 설정 후 토스트 창이 간헐적으로 동작하지 않음
- 리스트에서 '기본 배송지 설정', '삭제' context menu가 다중으로 열릴 수 있음.
````
