import React from 'react';
import PropTypes from 'prop-types';
import {RightSideBar} from './rightSideBar'
import {LeftSideBar } from './leftSideBar'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="three columns">
                    <LeftSideBar />
                </div>
                <div className="six columns">
                    {this.props.children}
                </div>
                <div className="three columns">
                    <RightSideBar />
                </div>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
