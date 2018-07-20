//定义组件最简单的方式是使用JavaScript函数

function Welcome(props){
    return <h1>HELLO,{props.name}</h1>
}

/*
* 上面代码是一个有效的组件，接收一个props对象并返回一个React元素，称为函数定义组件。
* */

// 使用ES6 class来定义组件
class Welcome extends React.Component {
    render() {
        return <h1>Hello,{this.props.name}</h1>
    }
}

const element = <Welcome name="Sara"/>;
ReactDOM.render(
    element,
    document.getElementById("root")
);
//上段代码输出"Hello,Sara"

/*
* 组合组件
* 组件可以在输出中引入其他组件。
* 创建一个App组件重复渲染Welcome组件。
* 组件的返回值只能有一个根元素，所以要用一个div包裹所有Welcome元素。
* */
function App() {
    return (
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Cahal"/>
            <Welcome name="Edite"/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

/*
* 提取组件
* 将组件切分为更小的组件。
* */

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                     src={props.author.avatarUrl}
                     alt={props.author.name} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};
ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author} />,
    document.getElementById('root')
);

// 上面组件由于嵌套，变得难以被修改，可复用的部分难以复用，需要从组件中提取一些小组件。
function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

// Comment组件可以改为如下
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
