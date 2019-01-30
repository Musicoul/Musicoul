import React from 'react';
import PropTypes from 'prop-types';
import { Comment ,Card} from 'semantic-ui-react'



class PostComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="my-4">
                        <Comment>
                            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                            <Comment.Content>
                                <Comment.Author as='a'>Matt</Comment.Author>
                                    <Comment.Metadata>
                                        <span>Today at 5:42PM</span>
                                    </Comment.Metadata>
                                    <Comment.Text>How artistic!</Comment.Text>

                            </Comment.Content>
                        </Comment>

            </div>
        );
    }
}

PostComment.propTypes = {};

export default PostComment;
