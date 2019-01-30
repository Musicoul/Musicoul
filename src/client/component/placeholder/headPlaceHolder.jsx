import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from 'semantic-ui-react'
import ImagePlaceHolder from './imagePlaceHolder.jsx'
class HeadPlaceHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div  >
                <Placeholder >
                    <ImagePlaceHolder height={50} width={50} rounded />
                    <Placeholder.Line length={this.props.length || 'long'} />
                    <Placeholder.Line length={this.props.lengthTwo || 'medium'} />
                </Placeholder>
            </div>
        );
    }
}

HeadPlaceHolder.propTypes = {};

export default HeadPlaceHolder;
