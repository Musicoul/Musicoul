import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from 'semantic-ui-react'
class FeedPlaceHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="w-full">
                <Placeholder>
                    <div className='ui placeholder'>
                    <Placeholder.Header image>
                        <Placeholder.Line length='medium' />
                        <Placeholder.Line length='very short' />
                    </Placeholder.Header>
                    <Placeholder style={{ height: 180 }}>
                        <Placeholder.Image />
                    </Placeholder>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length='full' />
                        <Placeholder.Line length='medium' />
                    </Placeholder.Paragraph>
                    <Placeholder.Line length='very short' />
                    </div>
                </Placeholder>
            </div>
        );
    }
}

FeedPlaceHolder.propTypes = {};

export default FeedPlaceHolder;
