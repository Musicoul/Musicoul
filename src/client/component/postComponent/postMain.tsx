import * as React from 'react';
import  PostMainMid from './postMainMid'
import  PostLeftSide from './postLeftSide'
import {RightSideBar} from '../rightSideBar'




export interface PostMainState {
}

export interface PostMainProps {
}


 class PostMain extends React.Component<PostMainProps, PostMainState> {
  constructor(props: PostMainProps) {
    super(props);
  }

  public render() {

    return (
      <div className="row">
        <div className="three columns">
            <PostLeftSide/>
        </div>
        <div className="six columns">
            <PostMainMid />
        </div>
        <div className="three columns ">
            <RightSideBar />
        </div>
      </div>
    );
  }
}
export default PostMain
