import React, { Component } from 'react';
class MySelf extends React.Component {
    constructor(props) {
        super(props);
    }
    showName() {
        alert("hello world")
    }
    render() {
        return (
            <div>
                <button onClick={() => this.showName()}>单击事件</button>
            </div>
        )
    }
}

export default MySelf;