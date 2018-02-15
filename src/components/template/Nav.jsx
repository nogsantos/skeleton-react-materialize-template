import React, {Component} from 'react';
import { Link } from 'react-router-dom';
/**
  *
 * @class Nav
 * @extends {Component}
 */
class Nav extends Component {
    /**
     * Creates an instance of Nav.
     * @memberof Nav
     */
    constructor(){
        super();
        this.menu = [
            {link: '/', title: 'Home'},
        ];
    }
    /**
     *
     * @returns
     * @memberof Nav
     */
    render(){
        return (
            <ul className="sidenav sidenav-fixed" >
                <li className="logo">
                    <a id="logo-container" href="/" className="brand-logo">
                        <span>Logo</span>
                    </a>
                </li>
                {
                    this.menu.map(menu => {
                        return (
                            <li key={menu.link}><Link to={menu.link}>{menu.title}</Link></li>
                        )
                    })
                }
            </ul>

        );
    }
}

export default Nav;
