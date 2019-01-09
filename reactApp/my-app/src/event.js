/*
* React通常不需要使用addEventListener添加监听事件，只需在元素初始化渲染的时候提供监听器*/
function ActionLink() {
    function handleClick(e) {
        // 阻止默认行为使用preventDefault，而不是return false。e是合成事件，不用担心兼容性问题
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    );
}

// 当你使用 ES6 class 语法来定义一个组件的时候，事件处理器会成为类的一个方法
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        /* 类的方法默认不绑定this,需要给this.handleClick绑定this，否则，当你调的时候this的值是undefined。
        * 如果不想使用bind绑定，也可以使用箭头函数。如LoggingButton类的写法。*/
        // 这个语法确保 `this` 绑定在 handleClick 中。
        // 警告：这是 *实验性的* 语法。

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

// 箭头函数绑定事件写法，这种写法会有一个问题，每次渲染都会创建一个不同的回调函数，如果作为一个属性值传入子组件，会额外重新渲染，建议还是直接绑定this在构造函数中。
class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        // This syntax ensures `this` is bound within handleClick
        return (
            <button onClick={(e) => this.handleClick(e)}>
                Click me
            </button>
        );
    }
}

// 向事件处理程序传递参数
class Popper extends React.Component{
    constructor(){
        super();
        this.state = {name:'Hello world!'};
    }

    preventPop(name, e){    //事件对象e要放在最后
        e.preventDefault();
        alert(name);
    }

    render(){
        return (
            <div>
                <p>hello</p>
                {/* Pass params via bind() method. */}
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
            </div>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);