import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from "react-router-dom"
import RouteConfig from "./models/router/routeConfig"
import NavBar from 'components/NavBar';
import 'normalize.css'
import './assets/layout.css'
import Home from 'pages/Home';
import { Provider } from 'react-redux'
import { store } from 'redux/reducer'

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

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
