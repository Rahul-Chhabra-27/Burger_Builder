import React,{Component} from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component{
    
    componentDidUpdate(){
        console.log('[OrderSummary.js]')
    }
    render(){
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igkey => {
                return <li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}
                 : </span> {this.props.ingredients[igkey]}</li>
            });
        return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delecious burger with following ingredients : </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price : {this.props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
            <Button btnType ="Success">CONTINUE</Button>
        </Aux>
    );
    }    
};

export default OrderSummary;