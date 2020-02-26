import React, { Component } from 'react';
class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <button onClick={this.props.refreshParent}>
                    更新父组件
                </button>
            </div>
        )
    }
}

class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    refreshParent() {
        this.setState({
            parentText: "子组件更新父组件成功"
        })
    }

    render() {
        return (
            <div>
                <Child refreshParent={this.refreshParent.bind(this)} />
                {this.state.parentText || "父组件更新前"}
            </div>
        )
    }
}

export default Father;



