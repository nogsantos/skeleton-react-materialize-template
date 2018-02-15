import React, {Component} from 'react';
import Nav from './template/Nav';
import Title from './template/Title';
import Footer from './template/Footer';
import Pages from './Pages';
/**
 * Defining the template
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
    render() {
        return (
            <section className="app-container" id="index-banner">
                <header>
                    <Nav />
                </header>
                <main>
                    <div className="section" id="index-banner">
                        <Title />
                    </div>
                    <div className="container">
                        <div className="row">
                            <Pages />
                        </div>
                    </div>
                </main>
                <footer className="page-footer docs-footer">
                    <Footer />
                </footer>
            </section>
        );
    }
}

export default App;
