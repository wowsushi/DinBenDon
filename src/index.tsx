import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from "react-router-dom"
import RouteConfig from "./models/router/routeConfig"
import NavBar from 'components/NavBar';
import 'normalize.css'
import './assets/layout.css'
import Home from 'pages/Home';


const renderRoute = (routeConfig) => {
    let result = []
    routeConfig.map(route => {
        let tmp = []
        if (route.routes) {
            tmp = renderRoute(route.routes)
        }

        tmp.push(
            <Route
                key={route.name}
                path={route.path}
                exact={route.exact}
                render={(routeProps) => {
                    return <route.component routes={route} {...routeProps} />
                }}
            />
        )
        result = result.concat(tmp)
    })
    return result
}

const App = () => {
    return (
        <HashRouter>
            <NavBar RouteConfig={RouteConfig} />
            <Switch>
                <Route exact path="/" component={Home} />
                {renderRoute(RouteConfig)}
            </Switch>
        </HashRouter>
    )
}

render(<App />, document.getElementById('root'));