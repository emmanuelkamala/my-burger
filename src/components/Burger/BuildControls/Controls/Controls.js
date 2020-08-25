import React from 'react';
import styles from './Controls.module.css';

const controls = ( props ) => (
    <div className={styles.Controls}>
      <div className={styles.Label}>{props.label}</div>
      <button className={styles.Less}>Less</button>
      <button className={styles.More}>More</button>
    </div>
  )

export default controls;
