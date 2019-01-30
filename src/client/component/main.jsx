import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from '@material-ui/core/Toolbar';
import {
    Switch,
    BrowserRouter ,
    HashRouter ,
    Redirect ,
    Route,
    Link
  } from 'react-router-dom'
import {Center} from './center'
import Profile from './profile.jsx'
import Home from './home.jsx'
import SitePage from './sitePage.jsx'
import {PostMain} from './postComponent'
  class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('this.props.children :', this.props.children);
        return (
            <div className="mt-12">
            <div className="mcontainer">
                <Toolbar>
                    <div className="row mt-8 w-full">
                        <Switch>
                            <Route exact path = "/user" component = {Profile} />
                            <Route exact path= "/" component = {() => <Home><Center/></Home>} />
                            <Route exact path= "/post" component = {PostMain} />
                        </Switch>
                    </div>
                </Toolbar>
            </div>
        </div>
        );
    }
}

Main.propTypes = {};

export default Main;
