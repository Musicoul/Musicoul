import React from 'react';
import PropTypes from 'prop-types';
import  {Recents} from '../layouts'
class LeftSideBottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="w-full">
                <Recents />
            </div>
        );
    }
}

LeftSideBottom.propTypes = {};

export default LeftSideBottom;
