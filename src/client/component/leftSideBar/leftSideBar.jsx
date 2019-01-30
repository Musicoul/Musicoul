import React from 'react';
import PropTypes from 'prop-types';
import LeftSideMid from './leftSideMid.jsx'
import Divider from '@material-ui/core/Divider';
import LeftSideBottom from './leftSideBottom.jsx'
class LeftSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="w-full ">
                <LeftSideMid  />

                <LeftSideBottom />
            </div>
        );
    }
}

LeftSideBar.propTypes = {};

export default LeftSideBar;
