import React from 'react';
import PropTypes from 'prop-types';
import Feeds from './feeds.jsx'
class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Feeds />
                <Feeds />
            </div>
        );
    }
}

Timeline.propTypes = {};

export default Timeline;
