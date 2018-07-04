import React, { Component } from 'react';
import '../../css/app.css';

import { Header } from '../components/Header';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { username: null };
    }

    componentDidMount() {
        fetch('/api/getUsername')
            .then(res => res.json())
            .then(({ username }) => this.setState({ username }));
    }

    render() {
        return (
            <main className="descriptive-class-name">
                <Header/>
                {this.state.username ? (
                    <h1>Hello {this.state.username}</h1>
                ) : (
                    <h1>Loading.. please wait!</h1>
                )}
            </main>
        );
    }
}
