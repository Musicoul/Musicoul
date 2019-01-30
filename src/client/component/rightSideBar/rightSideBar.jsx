import React from 'react';
import PropTypes from 'prop-types';
import { ImageAd ,SideFooter } from '../layouts'
import Advertisement from '../layouts/advertisement.jsx'

class RightSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="row">
                <div className="">
                    <Advertisement />
                    <ImageAd />
                    <SideFooter />
                </div>


            </div>
        );
    }
}

export default RightSideBar;
