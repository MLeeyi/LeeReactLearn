/*
 * 使用state的方式实现UI的渲染更新
 * 1.使用state替代props；
 * 2.添加一个类的构造函数，初始化状态,使用super关键字传递props到基础构造函数；
 * 3.类组件应始终使用props调用基础构造函数；
 * 4.将生命周期方法添加到类中；
 */

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    // 组件挂载时运行的代码，即生命周期钩子，组件输出到DOM后会执行componentDidMount()钩子
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // 在componentWillUnmount()生命周期钩子中卸载计时器
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // 实现每秒钟执行的tick()方法,使用this.setState()来更新组件局部状态
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

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);