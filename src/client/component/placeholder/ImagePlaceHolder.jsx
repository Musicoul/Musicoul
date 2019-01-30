import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from 'semantic-ui-react'
class ImagePlaceHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="my-2">
                <Placeholder style={{
                    height: this.props.height || 150,
                    width : this.props.width  || '100%',
                    borderRadius : this.props.rounded ? '50%':'none'
                }} >
                    <Placeholder.Image />
                </Placeholder>
            </div>
        );
    }
}

ImagePlaceHolder.propTypes = {};

export default ImagePlaceHolder;
