import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
import { Comment as CommentIcon, FavoriteOutlined} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import mojs from 'mo-js'
import TextField from '@material-ui/core/TextField';
import  Inputbox from './inputBox'
import { Comment,Input } from 'semantic-ui-react'
import PostComment from './postComment.jsx'
import Grid from '@material-ui/core/Grid';





const styles = theme => ({
    iconStyle : {
        color : 'Red'
    },
    commentIconActive : {
        color : '#f2890e'
    },
    commentIconInactive : {
        color : 'grey'
    },
    textField: {

    },
    favAvatar : {
        marginLeft : '-8px',
        width: '30px',
        height: '30px',
        border: '0'
    }
});
class Feeds extends React.Component {
    constructor(props) {
        super(props);
        this.favBtnHandler=this.favBtnHandler.bind(this);
        this.handleExpandClick=this.handleExpandClick.bind(this);
        this.state = {
             expanded: false,
             timeline : new mojs.Timeline()
        }



    }
    handleExpandClick(){
        this.setState(state => ({ expanded: !state.expanded }));
      };
    favBtnHandler(e){
        // animation
        const scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
        const btn = $('.heart')[0];

        // burst animation
        console.log('btn :', btn);
        const tween1 = new mojs.Burst({
            parent: btn,
            radius:   { 0: 100 },
            angle:    { 0: 45 },
            y: -10,
            count:    10,
            radius:       100,
            children: {
                shape:        'circle',
                radius:       30,
                fill:         [ 'red', 'blue' ],
                strokeWidth:  15,
                duration:     500,
            }
        });
        const tween2 = new mojs.Tween({
            duration : 900,
            onUpdate: function(progress) {
                var scaleProgress = scaleCurve(progress);
                btn.style.WebkitTransform = btn.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
            }
        })
  		const tween3 = new mojs.Burst({
            parent: btn,
            radius:   { 0: 100 },
            angle:    { 0: -45 },
            y: -10,
            count:    10,
            radius:       125,
            children: {
                shape:        'circle',
                radius:       30,
                fill:         [ 'blue', 'red' ],
                strokeWidth:  15,
                duration:     400,
            }
        });

        // add tweens to timeline:
        this.state.timeline.add(tween1, tween2, tween3);

        if ($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            this.state.timeline.play();
            $(this).addClass('active');
        }

        // animation ends here
    }

    render() {
        const {classes} = this.props;
        return (
            <div className="mx-1 mb-4">
                <Card >
                    <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                        <img src="./images/website-img/ad-1.jpg" alt="" srcSet=""/>
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon  />
                        </IconButton>
                    }
                    title={<span className="text-md font-semibold font-sans">Hello World</span>}
                    subheader="September 14, 2016"
                    />
                    <div className="w-full">
                        <div className="feed-media">
                            <img src="./images/website-img/ad-1.jpg" alt="" srcSet=""/>
                        </div>

                    </div>
                    <CardContent>
                    <span className="text-md " >
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </span>
                    </CardContent>

                    <CardActions>

                    <div className="flex w-full">
                        <div className="w-1/3" >
                            <span className="text-md leading-loose ">
                             <strong> 10 </strong> Comments
                             <strong> 9 </strong> Favs

                             </span>
                        </div>
                        <div className="w-2/3">
                            <Grid item  container justify="left" alignItems="left">
                                <Avatar className={classes.favAvatar}>S</Avatar>
                                <Avatar  src="https://library.kissclipart.com/20180904/hlw/kissclipart-female-user-icon-flat-clipart-computer-icons-avata-cc54cb11d400df36.jpg" className={classes.favAvatar} />
                                <Avatar  src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" className={classes.favAvatar} />
                                <Avatar className={classes.favAvatar}>PL</Avatar>

                            </Grid>
                        </div>

                    </div>

                    </CardActions>

                    <CardActions  >

                        <IconButton onClick={this.favBtnHandler} className="heart" aria-label="Add to favorites">
                            <FavoriteOutlined  />
                        </IconButton>
                        <IconButton  className={this.state.expanded?classes.commentIconActive:classes.commentIconInactive} aria-label="Comment" onClick={this.handleExpandClick}>
                            <CommentIcon  />
                        </IconButton>
                        <IconButton aria-label="Share" >
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <p className="text-xl font-semibold text-c my-4">Comments</p>
                            <Inputbox isBtn={true} />

                        <div className="overflow-auto max-h-screen" style={{maxHeight : '20em'}}>
                            <Comment.Group size='large'>
                                <PostComment  />
                                <PostComment />
                            </Comment.Group>
                        </div>


                        </CardContent>

                        <p className="text-md font-semibold  text-center py-2 text-uppercase">Load More</p>

                    </Collapse>
                </Card>
            </div>
        );
    }
}

Feeds.propTypes = {};

export default withStyles(styles)(Feeds);
