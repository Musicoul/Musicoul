import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
var classNames = require('classnames');
export interface InputBoxProps {
    classes : any;
    btn_name : String;
    type : string;
    placeholder : string;
    onKeyUpHandler : (event: React.KeyboardEvent<HTMLInputElement>) => void ;
    onBtnClick : (event: React.MouseEvent<HTMLElement>) => void;
    isBtn  : Boolean;
}

export interface InputBoxState {
}
const styles:any = (theme:any) => ({
    mInput : {
        background: 'rgba(244,244,244,0.6)',
        border: 'none',
        fontSize: '14px',
        color: '#909090',
        borderRight: 'none',
        height: '37px',
        padding: '0 10px 0 40px',
        outline: 'none',
        textOverflow: 'ellipsis',
        width: '100%'
    },

    margin: {
        margin: theme.spacing.unit,
      },
    color:{
        backgroundColor  :'red'
    },
    mBtn :{

        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
        backgroundColor: '#e0e0e0',
        background: '#2561c1 !important',
        color: '#fff',

        height: '35px',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'center',
        lineHeight: '25px',
        // fontSize: '17px',
        borderRadius: '0 3px 3px 0 !important',
        width: '100%',
        fontWeight: '400',


    },
    boxWrapper : {
        padding: '.5rem 0',
        display : 'flex',
        width : '100%',
    },
    w20 : {
        width: '20%'
    },
    w80 : {
        width: '80%'
    }
})

 class InputBox extends React.Component<InputBoxProps, InputBoxState> {
  constructor(props: InputBoxProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
      const { classes} = this.props;

    return (
      <div className={classes.boxWrapper}>
            <input type={this.props.type} onKeyUp={this.props.onKeyUpHandler}  placeholder={this.props.placeholder} className= {classNames(classes.mInput,classes.w80)} />
            <div className={classes.w20}>
                {this.props.isBtn? <Button variant="contained" size="small" onClick={this.props.onBtnClick}  className={classes.mBtn}>
                    {this.props.btn_name || 'Submit'}
                </Button> : ""}
            </div>
      </div>
    );
  }
}
export default withStyles(styles)(InputBox)