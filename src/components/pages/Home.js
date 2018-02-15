import React, {Component} from 'react';
/**
 * Home component
 *
 * @class Home
 * @extends {Component}
 */
class Home extends Component {

    Test = () => {
        let html = '';
        for (let i = 0; i < 200; i++) {
            html += 'lorem ipsun....\n'
        }
        return (
            <div className="row">
                {html}
            </div>
        );
    }

    render(){
        return (
            <section>
                <h1>&hearts;</h1>
                <this.Test />
            </section>
        );
    }
}

export default Home;
