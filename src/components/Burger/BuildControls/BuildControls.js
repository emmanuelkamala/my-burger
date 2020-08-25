import React from 'react';
import styles from './BuildControls.module.css';
import Controls from './Controls/Controls';

const burgerControls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'},
]

const buildControls = ( props ) => (
    <div className={styles.BuildControls}>
      {burgerControls.map(ctrl => (
        <Controls key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
  )

export default buildControls;
