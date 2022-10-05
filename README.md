# 好客租房


创建项目

```bash
$ npx create-react-app hkzf-mobile --template typescript
```

目录结构

```
src/
 assets/
 components/
 pages/
 utils/
 App.tsx
 index.css
 index.ts
```

## 安装 antd-mobile 组件

```bash
$ yarn add antd-mobile
```

https://mobile.ant.design/zh/guide/quick-start

antd-mobile v5 已经不需要单独导入 css 文件了

## 安装 react-router-dom 5.2.1

1. 安装

```bash
$ yarn add react-router-dom@5.3.3 react-router@5.3.3
$ yarn add @types/react-router-dom@5.3.3 @types/react-router@5.1.19
```

2. 导入路由组件 Router / Route / Link

3. 在 pages 文件夹中刚创建 `Home/index.js` 和 `CityList/index.js` 两个组件。

4. 使用 Route 组件配置**首页**和**城市选择页面**

```js
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

<Route path="/home" componenet={Home}>
<Route path="/citylist" componenet={CityList}>
```

