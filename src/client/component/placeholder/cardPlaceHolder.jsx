import React from 'react';
import PropTypes from 'prop-types';

import { Placeholder } from 'semantic-ui-react'

class CardPlaceHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="w-full">
                <Placeholder>
                    <Placeholder.Line length='full' className="my-4"  />
                    <Placeholder style={{ height: 150 }}>
                        <Placeholder.Image />
                    </Placeholder>
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='full' />
                    <Placeholder.Line length='very short' />
                </Placeholder>

            </div>
        );
    }
}

CardPlaceHolder.propTypes = {};

export default CardPlaceHolder;
