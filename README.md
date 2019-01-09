# React教程

## 学习顺序

[JSX简介](#JSX)

[组件和属性](#components)

[状态和生命周期](#state)

[处理事件]

[条件渲染]

[列表和键]

[表单]

[状态提升]

[组合VS继承]

### <a name="JSX"></a>JSX简介

使用花括号括起任意JavaScript表达式。

例子见`index.js`。

```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

### <a name="components"></a>组件和属性

例子见`component.js`。

函数式组件：

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

类组件：

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### <a name="state"></a>状态和生命周期

例子见`state.js` 和 `setState.js`。