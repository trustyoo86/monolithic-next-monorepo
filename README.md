# Monolithic-next-monorepo

## Summary

* 한개의 페이지 내에 Backend(Server) + Frontend(Client)를 설정하여, Root에서 실행할 수 있도록 각 패키지별로 Monolithic 아키텍처를 구현합니다.
* [Lerna](https://github.com/lerna/lerna)를 이용하여 패키지별로 페이지를 나누고, 각 패키지내의 Monolithic 아키텍처를 구현할 수 있도록 설정합니다.
* Yarn내에 private workspace 설정을 통해, 각 package 별 설치 및 install을 수행합니다.

## 사용 기술

### Backend

* Express
* Node.js
* Javascript (ES6+)
* 각 패키지별 express는 typescript로 설정

### Frontend

* React
* Typescript