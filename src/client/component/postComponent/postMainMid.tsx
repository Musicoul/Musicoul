import * as React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import { Comment as CommentIcon, FavoriteOutlined} from '@material-ui/icons';
import  CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import  Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { Card, Feed ,Comment} from 'semantic-ui-react'
import Collapse from '@material-ui/core/Collapse';
import {Inputbox , PostComment} from '../layouts'
const mojs = require('mo-js')


export interface PostMainMidProps {
    classes : any;
}

export interface PostMainMidState {
    expanded: boolean;
    timeline: any;
}


const styles:any = {
    card: {

      },
    media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    },
    userAvaterKeft: {
        margin: 10,
        float : 'left'
      },
      commentIconActive : {
        color : '#f2890e'
    },
    commentIconInactive : {
        color : 'grey'
    },
}
 class PostMainMid extends React.Component<PostMainMidProps, PostMainMidState> {
  constructor(props: PostMainMidProps) {
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
  favBtnHandler(){
    // animation
    const scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
    const btn:JQuery = document.querySelector('#pheart');
    console.log(this.state,'btn :', btn);

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
        onUpdate: function(progress:any) {
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

  public render() {
      const {classes} = this.props;
    return (
        <Card fluid>

        <img src="./images/website-img/rainy.jpg" className="w-full" alt="" />
        <Divider/>
        <Card.Content>

            <p>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </p>
        </Card.Content>

        <CardActions>
        <IconButton onClick={this.favBtnHandler} id="pheart" aria-label="Add to favorites">
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
                        <p className="text-xl font-semibold text-c my-4">Add Comment</p>
                            <Inputbox isBtn={true} />
                        </CardContent>

                    </Collapse>
        </Card>

    );
  }
}
export default withStyles(styles)(PostMainMid)