import React from 'react';

import { Card} from 'semantic-ui-react'
class Advertisement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="w-full">

            <a href="">
            <Card  elevation={1} className="w-full-imp">
                <div className="w-full">
                    <span className="text-sm p-2 metatag-one">Sponsored</span>
                    <div className="ad-img">
                        <img src="./images/website-img/ad-1.jpg" alt="" srcSet=""/>
                    </div>
                    <div className="w-full p-2">
                        <h1 className="text-2xl pv-2 text-grey-darkest">
                            Advertisment
                        </h1>
                        <p className="text-md text-grey-darker">
                            It's an  sized heading with normal font-weight.Use a heading element whenever possible as they can be used as navigation for assistive technologies, and avoid skipping levels
                        </p>
                    </div>

                </div>
            </Card>
            </a>

            </div>
        );
    }
}

Advertisement.propTypes = {};
export default Advertisement;