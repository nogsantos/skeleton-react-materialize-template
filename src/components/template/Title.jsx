import React, {Component} from 'react';
/**
 *
 * @class Title
 * @extends {Component}
 */
class Title extends Component {
    /**
     *
     * @returns
     * @memberof Title
     */
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 offset-m1 xl12 center-on-small-only">
                        <h1 className="header blue-text text-darken-4">React</h1>
                        <h4 className="light">Templating...</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Title;
