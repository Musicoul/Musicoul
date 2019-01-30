import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {  Image } from 'semantic-ui-react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import {initialStateTypes} from '../../redux/initialState'
import {  } from 'react-redux'
import {StoreType} from '../../redux/store'
export interface PostLeftSideProps {
    classes : any,
    testIncrementor : number,
    increaseTestIncreator() : void
}

export interface PostLeftSideState {
}
const styles:any = {
    userAvaterKeft: {
        margin: 10,
        float : 'left'
      }
}
 class PostLeftSide extends React.Component<PostLeftSideProps, PostLeftSideState> {
  constructor(props: PostLeftSideProps) {
    super(props);

    this.state = {
    }
    console.log('this.props.testIncrementor :', this.props.testIncrementor);
  }

  public render() {
      const { classes} = this.props;
      console.log('this.props :', this.props);
    return (
      <div>

            <div className="">
                <Avatar className={classes.userAvaterKeft}>H</Avatar>
                <span  className="text-2xl font-semibold  align-middle line-ht-3 leading-loose"  >Easy</span>
            </div>
      </div>
    );
  }
}



const mapStateToProps = (state:StoreType) => {
  console.log('state :', state);
  return {

    testIncrementor : state.myReducer.testIncrementor
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    increaseTestIncreator :  () => dispatch({type : "INCREASE_TEST_COUNTER",data : 1})
  }
}






PostLeftSide = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostLeftSide);
export default withStyles(styles)(PostLeftSide)