import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case 'breadBottom':
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case 'breadTop':
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case 'meat':
        ingredient = <div className={classes.Meat}></div>;
        break;
      case 'cheese':
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case 'salad':
        ingredient = <div className={classes.Salad}></div>;
        break;
      case 'gooseBreast':
        ingredient = <div className={classes.GooseBreast}></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
