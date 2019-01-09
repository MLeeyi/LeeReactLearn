/*
    * 关于state需注意：
    * 1.不要直接修改state，而是使用setState;
    * 例如：
    *   this.state.comment = 'Hello';  错误
    *   this.setState({comment: 'Hello'});  正确
    * 唯一可以分配this.state的地方是构造函数；
    * 2.state更新可能是异步的，为了优化性能，可能多个setState调用会合并为一次更新，
    * 因为this.props和this.state可能异步更新，所以不能依赖他们的值计算下一个状态，会报错；
    * 例如：
    *   this.setState({
    *       counter: this.state.counter + this.props.increment
    *   });
    * 为避免报错setState应使用函数而不是对象的格式：
    * this.setState((state, props) => ({
    *   counter: state.counter + props.increment
    * }));
    * 第一个参数为前一个状态值，第二个参数为更新后的值。
    * */

// state更新会被合并
class stateDemo extends React.Component {
    constructor(props) {
        super(props);
        // this.state中包含几个独立的变量
        this.state = {
            posts: [],
            comments: []
        };
    }
    // 通过调用独立的setState分别更新它们
    componentDidMount() {
        fetchPosts().then(response => {
            this.setState({
                posts: response.posts
            });
        });

        fetchComments().then(response => {
            this.setState({
                comments: response.comments
            });
        });
    }
}

/*
* 组件之间是独立的，不用关心其他组件是否有状态，所以state被称为"本地状态" 或 "封装状态"。
* 它不能被其他外部组件访问，但可以将state向下传递，作为其子组件的props。
* 例如：
*   <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
*   this.state.date可以传给子组件作为属性
*   <FormattedDate date={this.state.date} />*/
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}