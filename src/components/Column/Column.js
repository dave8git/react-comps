import React from 'react';
import styles from'./List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';

class Column extends React.Component {
  render() {
    return (
      <section className={styles.component}>
          <h3 className={styles.title}></h3>
      </section>
      
    )
  }
}

export default Column;