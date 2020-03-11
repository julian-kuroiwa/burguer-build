import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burguer = props => {
	let transformIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])].map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />);
		}).flatMap(x => x);

		if(transformIngredients.length === 0) {
			transformIngredients = <p>Please start adding ingredients!</p>
		}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformIngredients}
			<BurgerIngredient type="bread-bottom"/>
		</div>
	);
}

export default burguer;
