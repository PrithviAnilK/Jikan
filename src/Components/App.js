import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import history from '../history';
import Timer from './Timer';
import Nav from './Nav';
import Settings from './Settings';
import { Layout } from 'antd';
import '../Styles/App.css';

const { Content } = Layout;

const App = () => {
    return(
        <Layout>
            <HashRouter history = {history}>
                <Nav />
                <Content id = "content">
                    <Route path="/" exact component={Timer} />
                    <Route path="/settings" exact component={Settings} />
                </Content>
            </HashRouter>
        </Layout>
    )
}

export default App;