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

### 嵌套路由（子路由）

1. 在 `pages` 文件夹中创建 `News/indexjs` 组件。
2. 在 `Home` 组件中， 添加一个 Route 作为自路由（嵌套路由） 的出口
3. 嵌套路由的的 path 格式 **以父路由的 path 开头**（父组件展示， 子组件才会展示）
4. 修改地址栏为 /home/news 的时候， News 信息就可以在 Home 中展示了。

```js
// 外层
<Router> 
<div>
  <Route path='/home' componenet={Home}/>
</div>
</Router>
```

```js
// 嵌套
const Home=()=>(
    <div>
        <Link to="/home/news">动态</Link>
        
        <Route path='/home/news' componenet={News}/>
    </div>
)
```
