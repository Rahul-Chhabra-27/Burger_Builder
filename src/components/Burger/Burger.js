import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = props => {
    const transformedIngredients = Object.keys(props.ingredients);//[0:salad,1:meat,2:bacon,3:cheese]
    let StoredIngredients = transformedIngredients.map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_,i) => {
            return <BurgerIngredient key = {i+igkey} type={igkey} />
        });
    }).reduce((arr,el) => {
        return arr.concat(el);
    },[])
    if(StoredIngredients.length === 0){
        StoredIngredients = <p>Please start adding  ingredient!!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type = "bread-top" />
            {StoredIngredients}
            <BurgerIngredient type = "bread-bottom" />
        </div>
    )
}
export default burger;