import React, { Component } from 'react'

class Welcome extends Component {
    render() {
    return <h1>Wassup {this.props.me} a.k.a {this.props.nickName}</h1>
    }
}

export default Welcome