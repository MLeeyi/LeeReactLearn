import React from 'react';
import ReactDOM from 'react-dom';

// JSX的基本用法

// 使用表达式

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

/*
* JSX本身也是一种表达式，可以在if或for语句里使用
* */
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

// 推荐在JSX代码外加上小括号
const element = (
    <div>
        <h1>
            Hello, {formatName(user)}!
        </h1>
        <h1>
            {getGreeting()}
        </h1>
    </div>
);

// 定义属性，tabIndex值为字符串
const element1 = <div tabIndex="0"></div>;
// 定义属性，src值为JavaScript表达式
const element2 = <img src={user.avatarUrl}></img>;

// JSX防注入攻击，可以直接使用input让用户输入
// const title = response.potentiallyMaliciousInput;
// 直接使用是安全的：
const element3 = <h1>{title}</h1>;

/*
通过ReactDOM.render()方法将React元素渲染到根DOM节点中。
React元素被创建后都是不可变的，无法改变其内容或属性。
*/
ReactDOM.render(
    element,
    document.getElementById('root')
);