# Design Pattern 공부하기

- Head First Design Pattern 책을 보고 type script 로 공부하기

### 실행

```
$ yarn
    or
$ npm i

이후

$ yarn dev
$ npm run dev
```

### 폴더 구조

```
/observer_pattern_study
         | --- node_modules
         | --- public
         | --- .gitignore
         | --- index.html
         | --- src
         |      | --- observer
         |      | --- strategy
         | --- main.js
         | --- package-lock.json
         | --- package.json
```

### Scripts

```
{
  "name": "observer_pattern_study",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^4.2.0"
  }
}
```
