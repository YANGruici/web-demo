# React 知识总结

## React 简介

React 是由 Facebook 开发的一个用于构建用户界面的 JavaScript
库。它的主要目的是通过组件的方式构建快速、动态的用户界面。React 允许开发者将 UI
分割成独立的、可复用的组件，并在数据变化时高效地更新和渲染组件。

## React 环境搭建

### 安装 Node.js

React 依赖于 Node.js 和 npm（Node 包管理器），因此首先需要安装 Node.js。可以从
[Node.js 官网](https://nodejs.org/) 下载并安装。

### 创建 React 应用

使用 `create-react-app` 工具可以快速创建一个 React 项目。

```
npx create-react-app my-app
cd my-app
npm start
```

这将启动开发服务器并在浏览器中打开应用。

## React 核心概念

### 组件

组件是 React 的基本构建块。每个组件可以定义为一个 JavaScript
函数或类。函数组件简单且易于理解，通常用于定义只依赖于 props
的组件；而类组件则拥有更丰富的功能，如状态和生命周期方法。

**代码示例：**

```react
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### JSX

JSX 是 JavaScript 的一种语法扩展，用于描述 UI 结构。JSX 允许在 JavaScript
代码中编写 HTML 结构，最终会被 Babel 转换成 `React.createElement()`
的调用形式，因此每个 JSX 元素实际上是一个 React 元素。

**代码示例：**

```react
const element = <h1>Hello, world!</h1>;

// 等同于
const element = React.createElement('h1', null, 'Hello, world!');
```

### Props

Props 是 React 组件的输入参数，用于在组件间传递数据。组件的 props
是只读的，不能在组件内部修改，但可以通过父组件重新传递新的 props
来更新子组件的显示内容。

**代码示例：**

```react
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
```

### State

State 是 React 组件的内部状态，用于记录组件的数据变化。State
允许组件在用户交互或其它事件发生时更新其渲染内容。类组件中通过 `this.state`
进行状态管理，使用 `setState` 更新状态，而函数组件则可以通过 `useState` Hook
管理状态。

**代码示例：**

```react
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

### 事件处理

React 使用驼峰式命名约定来定义事件处理程序，而不是传统的 HTML 事件处理属性（如
`onclick`）。事件处理器在 React 中接收一个事件对象
`e`，与原生浏览器事件类似，但使用的是合成事件层。

**代码示例：**

```react
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

### 条件渲染

React 允许通过条件判断来动态渲染不同的组件或元素。可以使用 JavaScript
中的条件运算符，如 `if` 或三元运算符，也可以通过逻辑与运算符（`&&`）进行短路渲染。

**代码示例：**

```react
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;
}

// 短路渲染
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>You have {unreadMessages.length} unread messages.</h2>
      }
    </div>
  );
}
```

### 列表渲染

使用 `map()` 函数遍历数组并生成一组 React 元素。每个元素都应该有一个独特的 `key`
属性，帮助 React 识别哪些元素发生了变化、添加或移除，从而提高渲染性能。

**代码示例：**

```react
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return <ul>{listItems}</ul>;
}
// 使用 key 时的一个常见错误是使用数组索引作为 key 值，
// 这可能会导致性能问题或组件状态的错误。
```

## React Hooks

### useState

`useState` 是用于声明状态的 Hook。通过调用
`useState`，可以在函数组件中添加状态变量，并使用数组解构的方式获取当前状态值及其更新函数。

**代码示例：**

```react
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### useEffect

`useEffect` 是用于执行副作用操作的 Hook，比如数据获取、订阅、手动更改 DOM
等。默认情况下，`useEffect` 在每次渲染后都会执行，但可以通过传入一个依赖项数组来控制
`useEffect` 的执行时机。

**代码示例：**

```react
import React, { useEffect, useState } from 'react';
function Example() {
  const [count, setCount] = useState(0);

  // 当 count 发生变化时执行副作用
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### useContext

`useContext` 用于在组件树中传递数据而无需手动通过 props
一层一层地传递。它让你能够从组件树中的任意层级读取 context 数据。

**代码示例：**

```react
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button style={{ background: theme }}>Click me</button>;
}
```

### useReducer

`useReducer` 是一种替代 `useState` 的状态管理方式，适用于复杂的状态逻辑。与
`useState` 相比，`useReducer`
更适合包含多个子值或需要依赖于之前的状态进行更新的场景。

**代码示例：**

```react
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}
```

## React 路由

React Router 是 React 的标准路由解决方案。它允许在单页应用中通过 URL
的变化来控制显示的组件，实现页面间的导航。React Router 提供了 `BrowserRouter`,
`Route`, `Switch`, `Link` 等组件来构建复杂的路由逻辑。

**安装 React Router：**

```
npm install react-router-dom
```

**代码示例：**

```react
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
```

## React 状态管理

### Context API

Context API 允许在整个组件树中共享状态而不必显式地通过 props 传递。它通常与
`useContext` Hook 一起使用，以便更方便地访问全局状态。Context
适合解决全局数据共享问题，如当前认证用户、主题、语言等。

**代码示例：**

```react
const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState("John");

  return (
    <UserContext.Provider value={user}>
      <Component1 />
    </UserContext.Provider>
  );
}

function Component1() {
  return (
    <div>
      <Component2 />
    </div>
  );
}

function Component2() {
  const user = React.useContext(UserContext);
  return (
    <div>
      <h1>{`Hello ${user}`}</h1>
    </div>
  );
}
```

### Redux

Redux
是一个流行的状态管理库，适用于大型应用。它采用单一数据源（store）的方式集中管理应用状态，使用纯函数（reducer）来描述状态的变化，通过
action 来驱动状态变更。Redux 与 React 结合使用时，通常还会使用 `react-redux`
库提供的 `Provider` 和 `connect`/`useSelector`/`useDispatch` 等功能。

**安装 Redux：**

```
npm install redux react-redux
```

**代码示例：**

```react
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

// 定义一个 reducer，处理 action 并更新状态
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'increment':
      return { value: state.value + 1 };
    case 'decrement':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// 创建 Redux store
const store = createStore(counterReducer);

function Counter() {
  // 使用 useSelector 从 store 中获取状态值
  const value = useSelector((state) => state.value);
  // 使用 useDispatch 获取 dispatch 函数
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <span>{value}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```

## React 性能优化

### PureComponent

`PureComponent` 是一种优化组件性能的方法，仅当 props 或 state
发生浅比较时才重新渲染。它适用于组件的渲染受限于浅比较时，这样可以避免不必要的渲染，从而提升性能。

**代码示例：**

```react
class MyComponent extends React.PureComponent {
  render() {
    return <div>{this.props.value}</div>;
  }
}
```

### React.memo

`React.memo` 是一个高阶组件，用于优化函数组件的性能。它类似于
`PureComponent`，但适用于函数组件。React.memo 仅在传入的 props
发生变化时重新渲染组件，这在需要避免不必要的重新渲染时非常有用。

**代码示例：**

```react
const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});
```

### 懒加载

通过 `React.lazy` 和 `Suspense`
实现组件的懒加载，从而优化初始加载时间。`React.lazy`
允许你通过动态导入（`import()`）来实现懒加载组件，而 `Suspense`
则可以在懒加载组件还未准备好时显示一个备用内容（例如加载指示器）。

**代码示例：**

```react
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

## React 与后端通信

### 使用 Fetch API

Fetch API 是原生的浏览器 API，用于发起 HTTP 请求。它返回一个 `Promise`
对象，因此可以使用 `.then()` 或 `async/await` 来处理异步操作。Fetch API
是一种轻量级但功能强大的 HTTP 请求方式。

**代码示例：**

```react
useEffect(() => {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error fetching data:', error));
}, []);
```

### 使用 Axios

Axios 是一个基于 Promise 的 HTTP 客户端，支持更强大的功能，如拦截器、自动转换 JSON
响应、取消请求等。Axios 相比 Fetch API
更加灵活和易用，尤其在处理复杂请求时表现突出。

**安装 Axios：**

```
npm install axios
```

**代码示例：**

```react
import axios from 'axios';

useEffect(() => {
  axios.get('https://api.example.com/data')
    .then(response => setData(response.data))
    .catch(error => console.error('Error fetching data:', error));
}, []);
```

## React 测试

### Jest

Jest 是一个流行的 JavaScript 测试框架，广泛用于 React
应用。它提供了丰富的功能，包括快照测试、模拟和定时器控制等，并且与 React
非常兼容。Jest 也可以很好地与 React Testing Library 一起使用来测试 React 组件。

**安装 Jest：**

```
npm install --save-dev jest
```

**代码示例：**

```react
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
```

### React Testing Library

React Testing Library 是一个用于测试 React
组件的库。它的设计理念是以用户的视角来测试组件的行为，而不是实现细节。React Testing
Library 通常与 Jest 一起使用，可以模拟用户的交互，验证组件是否按预期工作。

**安装 React Testing Library：**

```
npm install --save-dev @testing-library/react
```

**代码示例：**

```react
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

