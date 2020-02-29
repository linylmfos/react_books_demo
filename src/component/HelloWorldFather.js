import React, { Component } from 'react';
class HelloWorldFather extends React.Component {
    constructor(props) {
        super(props);
        this.updateChildProps = this.updateChildProps.bind(this);
        this.state = {
            name: "React"
        }
    }
    updateChildProps() {
        this.setState({
            name: "Vue"
        })
    }
    render() {
        return (
            <div>
                <HelloWorld name={this.state.name}></HelloWorld>
                <button onClick={this.updateChildProps}>更新子组件props</button>
            </div>
        )
    }
} 

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        console.log("1. 构造函数");
        console.log("2. 设置状态机");
    }

    componentWillMount() {
        console.log("3. componentWillMount 完成首次渲染前调用");
    }

    componentWillReceiveProps() {
        console.log("6.父组件更新子组件props时， 调用该方法");
    }
    shouldComponentUpdate() {
        console.log("7. 决定组件props或者state的改变是否需要进行重新渲染");
        return true;
    }
    componentWillUpdate() {
        console.log("8.当收到新的props或state时， 调用该方法");
    }
    render() {
        console.log("4.组件进行渲染");
        return (
            <div>
                <div>{this.props.name}</div>
            </div>
        )
    }
    componentDidMount() {
        console.log("5. componentDidMount render 渲染后的操作");
    }
    componentDidUpdate() {
        console.log("9. 组件重新被渲染后， 调用该方法");
    }
}

export default HelloWorldFather;