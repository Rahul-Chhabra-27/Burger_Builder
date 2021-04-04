import React,{Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';
import Modal from '../UI/Modal/Modal';
import OrderSummary from '../Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad:10,
    bacon:15,
    cheese:20,
    meat:50
}
class BurgerBuilder extends Component{
    state = {
        ingredients : {
            salad:0,
            cheese:0,
            bacon:0,
            meat:0,
        },
        totalPrice:20,
        purchasable:false,
        purchasing:false,
    }
    purchaseHandler  = () => {
        this.setState({purchasing:true})
    }
    updatePurchasable = () => {
         const ingredients = {...this.state.ingredients};
         let amount = 0;

         for(let key in ingredients){
             amount += ingredients[key]
         }
         return amount;
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;

        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        let priceAdditon = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdditon;
        this.setState({ingredients:updatedIngredients,totalPrice:newPrice,purchasable:true});
    }
    removeIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        if(oldCount !== 0){
            const newCount = oldCount-1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = newCount;

            const oldPrice = this.state.totalPrice;
            const priceDeducted = INGREDIENT_PRICES[type];
            const newPrice = oldPrice-priceDeducted;
            const isPurchasable = this.updatePurchasable() <=1? false:true ;
            this.setState({ingredients:updatedIngredients,totalPrice:newPrice,purchasable:isPurchasable})
        }
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(            
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        price={this.state.totalPrice}
                        purchaseCancel={this.purchaseCancelHandler}
                        ingredients={this.state.ingredients} ></OrderSummary>
                </Modal>
                <Burger ingredients = {this.state.ingredients}></Burger>
                <BuildControls 
                    purchasable = {this.state.purchasable}
                    price={this.state.totalPrice}
                    added = {this.addIngredientHandler} 
                    removed = {this.removeIngredientHandler} 
                    disabled = {disabledInfo}
                    ordered = {this.purchaseHandler}
                />
            </Aux>
        )
    }
}
export default BurgerBuilder;