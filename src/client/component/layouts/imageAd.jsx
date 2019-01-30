import React from 'react';
import PropTypes from 'prop-types';
import { Advertisement ,Card } from 'semantic-ui-react'


class ImageAd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="w-full my-4">
                <Card className="w-full-imp">
                <Advertisement className="w-full">
                    <img src='https://media-assets-04.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-127306-screen_shot_2018-06-27_at_7.04.23_am--2x1--940.png' />
                </Advertisement>
                </Card>
            </div>
        );
    }
}

ImageAd.propTypes = {};

export default ImageAd;
