import React from 'react';
import PropTypes from 'prop-types';
import Header from './primaryMHeader.jsx'
import Main from './main.jsx'
import global from 'global'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (

                <div>

                    <Header />
                    <Main />
                </div>

        );
    }

}

App.propTypes = {};

export default App;
