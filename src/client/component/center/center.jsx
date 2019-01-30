import React from 'react';
import PropTypes from 'prop-types';
import Timeline from '../layouts/timeline.jsx'
class Center extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className=" w-full">
                <Timeline />
            </div>


        );
    }
}

Center.propTypes = {};

export default Center;
