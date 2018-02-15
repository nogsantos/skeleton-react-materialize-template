import React, {Component} from 'react';
/**
 *
 * @class Footer
 * @extends {Component}
 */
class Footer extends Component {
    /**
     * Creates an instance of Footer.
     * @memberof Footer
     */
    constructor(){
        super();

        this.state = {
            currentYear : new Date().getFullYear()
        }
    }
    /**
     *
     * @returns
     * @memberof Footer
     */
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 offset-m1 xl12">
                        rows...
                        <div className="footer-copyright">
                            &copy; Fabricio Nogueira {this.state.currentYear}
                            <a className="grey-text text-darken-1 right" target="_blank" rel="noopener noreferrer" href="https://opensource.org/licenses/MIT">MIT License</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
