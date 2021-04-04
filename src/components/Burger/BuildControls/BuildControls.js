import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControl = props => {
    const controls = [
        {label : 'Salad' , type:'salad'},
        {label : 'Bacon' , type:'bacon'},
        {label : 'Cheese' , type:'cheese'},
        {label : 'Meat' , type:'meat'},
    ]
    const buildControls = controls.map((key,i) => {
        return <BuildControl 
                    key = {key+i} 
                    label = {key.label} 
                    added = {() => props.added(key.type)}
                    removed = {() => props.removed(key.type)}
                    disabled = {props.disabled[key.type]}
                />
    })
    return(
        <div className={classes.BuildControls}>
            <p style={{fontSize:'45'}}>CurrentPrice <strong> : {props.price}</strong></p>
            {buildControls}
            <button 
                disabled = {!props.purchasable} 
                className={classes.OrderButton}
                onClick={props.ordered}
            >ORDER NOW</button>
        </div>
    )
}
export default buildControl;