import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
/**
 * Main pages component
 *
 * @class Pages
 * @extends {Component}
 */
class Pages extends Component {
    render(){
        return (
            <div className="col s12 m12 offset-m1 xl12 center-on-small-only">
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default Pages;
