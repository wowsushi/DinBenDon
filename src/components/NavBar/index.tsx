import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter, RouteProps } from 'react-router'
import './style.css'

const NavBar = ({ RouteConfig, ...props }: RouteProps & any) => {
    const renderNav = (routeConfig) => {
        let result = []

        routeConfig.map(route => {
            let tmp = []
            tmp.push(
                <li key={route.name}>
                    <Link to={route.path}>{route.chineseName}</Link>
                    {route.routes ? (
                        <ul>
                            {renderNav(route.routes)}
                        </ul>
                    ) : undefined}
                </li>
            )

            result = result.concat(tmp)
        })
        return result

    }

    return (
        <nav className="nav-bar-container">
            <ul className="nav-bar-wrapper">
                {renderNav(RouteConfig)}
            </ul>
        </nav>
    )
}

export default withRouter(NavBar)